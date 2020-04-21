--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

-- Started on 2020-04-21 19:00:42

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE db_llr;
--
-- TOC entry 3873 (class 1262 OID 21850)
-- Name: db_llr; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE db_llr WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Italian_Italy.1252' LC_CTYPE = 'Italian_Italy.1252';


ALTER DATABASE db_llr OWNER TO postgres;

\connect db_llr

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3874 (class 0 OID 0)
-- Dependencies: 3873
-- Name: DATABASE db_llr; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE db_llr IS 'Database for CAS Project Lanzarone-Longo-Romanello';


--
-- TOC entry 2 (class 3079 OID 21866)
-- Name: postgis; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS postgis WITH SCHEMA public;


--
-- TOC entry 3875 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION postgis; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION postgis IS 'PostGIS geometry, geography, and raster spatial types and functions';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 214 (class 1259 OID 23113)
-- Name: position; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."position" (
    id integer NOT NULL,
    user_id integer NOT NULL,
    latitude double precision,
    longitude double precision,
    activity character varying(16),
    geom public.geometry(Point,4326) GENERATED ALWAYS AS (public.st_setsrid(public.st_point(longitude, latitude), 4326)) STORED,
    date_time timestamp without time zone DEFAULT clock_timestamp(),
    session_id character varying(128) NOT NULL,
    auto_generated boolean,
    id_geofence_triggered integer
);


ALTER TABLE public."position" OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 24045)
-- Name: 1)view_path_from_activity; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."1)view_path_from_activity" AS
 SELECT max(order_position.id) AS id,
    concat('user: ', order_position.user_id, ', activity: ', order_position.activity) AS user_activity,
    order_position.user_id,
    order_position.session_id,
    order_position.activity,
    public.st_makeline(order_position.geom) AS geom
   FROM ( SELECT "position".id,
            "position".user_id,
            "position".latitude,
            "position".longitude,
            "position".activity,
            "position".geom,
            "position".date_time,
            "position".session_id,
            "position".auto_generated,
            "position".id_geofence_triggered
           FROM public."position"
          ORDER BY "position".date_time) order_position
  GROUP BY order_position.user_id, order_position.activity, order_position.session_id;


ALTER TABLE public."1)view_path_from_activity" OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 23812)
-- Name: 1)view_path_from_userid; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."1)view_path_from_userid" AS
 SELECT max("position".id) AS id,
    "position".user_id,
    "position".session_id,
    "position".activity,
    public.st_makeline("position".geom) AS geom
   FROM public."position"
  GROUP BY "position".user_id, "position".session_id, "position".activity;


ALTER TABLE public."1)view_path_from_userid" OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 22923)
-- Name: geofence_bike; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.geofence_bike (
    gid integer NOT NULL,
    message character varying(30),
    geom public.geometry(Polygon,4326)
);


ALTER TABLE public.geofence_bike OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 23555)
-- Name: 3)geofence_bike_from_number_users; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."3)geofence_bike_from_number_users" AS
 WITH geofence_selected AS (
         SELECT "position".id_geofence_triggered,
            count("position".id_geofence_triggered) AS numero_attivazioni
           FROM public."position"
          WHERE (("position".id_geofence_triggered IS NOT NULL) AND (("position".activity)::text = 'bike'::text))
          GROUP BY "position".id_geofence_triggered
        )
 SELECT g.gid,
    g.geom,
    gs.numero_attivazioni AS activation_numbers
   FROM (public.geofence_bike g
     JOIN geofence_selected gs ON ((g.gid = gs.id_geofence_triggered)));


ALTER TABLE public."3)geofence_bike_from_number_users" OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 24055)
-- Name: geofence_car; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.geofence_car (
    gid integer NOT NULL,
    message character varying(2083),
    geom public.geometry(Polygon,4326)
);


ALTER TABLE public.geofence_car OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 24061)
-- Name: 3)geofence_car_from_number_users; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."3)geofence_car_from_number_users" AS
 WITH geofence_selected AS (
         SELECT "position".id_geofence_triggered,
            count("position".id_geofence_triggered) AS numero_attivazioni
           FROM public."position"
          WHERE (("position".id_geofence_triggered IS NOT NULL) AND (("position".activity)::text = 'car'::text))
          GROUP BY "position".id_geofence_triggered
        )
 SELECT g.gid,
    g.geom,
    gs.numero_attivazioni AS activation_numbers
   FROM (public.geofence_car g
     JOIN geofence_selected gs ON ((g.gid = gs.id_geofence_triggered)));


ALTER TABLE public."3)geofence_car_from_number_users" OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 23008)
-- Name: geofence_walk; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.geofence_walk (
    gid integer NOT NULL,
    message character varying(2083),
    geom public.geometry(Polygon,4326)
);


ALTER TABLE public.geofence_walk OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 23545)
-- Name: 3)geofence_walk_from_number_users; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."3)geofence_walk_from_number_users" AS
 WITH geofence_selected AS (
         SELECT "position".id_geofence_triggered,
            count("position".id_geofence_triggered) AS numero_attivazioni
           FROM public."position"
          WHERE (("position".id_geofence_triggered IS NOT NULL) AND (("position".activity)::text = 'walk'::text))
          GROUP BY "position".id_geofence_triggered
        )
 SELECT g.gid,
    g.geom,
    gs.numero_attivazioni AS activation_numbers
   FROM (public.geofence_walk g
     JOIN geofence_selected gs ON ((g.gid = gs.id_geofence_triggered)));


ALTER TABLE public."3)geofence_walk_from_number_users" OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 23945)
-- Name: 4)users_last_position; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."4)users_last_position" AS
 SELECT p.id,
    p.user_id,
    p.geom,
    p.date_time
   FROM (public."position" p
     JOIN ( SELECT "position".user_id,
            "position".session_id,
            max("position".date_time) AS maxdate
           FROM public."position"
          WHERE ("position".auto_generated IS NULL)
          GROUP BY "position".user_id, "position".session_id) pm ON (((p.user_id = pm.user_id) AND (p.date_time = pm.maxdate))));


ALTER TABLE public."4)users_last_position" OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 23954)
-- Name: 4)KMEANS_cluster; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."4)KMEANS_cluster" AS
 SELECT ksub.centroid,
    public.st_npoints(public.st_collect(ksub.geom)) AS number_points,
    public.st_centroid(public.st_collect(ksub.geom)) AS geom_of_centroid,
    public.st_envelope(public.st_collect(ksub.geom)) AS area_of_cluster
   FROM ( SELECT public.st_clusterkmeans("4)users_last_position".geom, 6) OVER () AS centroid,
            "4)users_last_position".geom
           FROM public."4)users_last_position") ksub
  GROUP BY ksub.centroid
 HAVING (public.st_npoints(public.st_collect(ksub.geom)) >= 2)
  ORDER BY ksub.centroid;


ALTER TABLE public."4)KMEANS_cluster" OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 23950)
-- Name: 4)KMEANS_clustered_points; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."4)KMEANS_clustered_points" AS
 SELECT "4)users_last_position".id,
    "4)users_last_position".user_id,
    "4)users_last_position".geom,
    public.st_clusterkmeans("4)users_last_position".geom, 6) OVER () AS cluster_id
   FROM public."4)users_last_position";


ALTER TABLE public."4)KMEANS_clustered_points" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 23657)
-- Name: 5)point_bike_out_of_geofence; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)point_bike_out_of_geofence" AS
 SELECT p.id,
    p.geom
   FROM public."position" p
  WHERE (((p.activity)::text = 'bike'::text) AND (p.auto_generated IS NULL))
EXCEPT
 SELECT DISTINCT ON (p.id) p.id,
    p.geom
   FROM public."position" p,
    public.geofence_bike gb
  WHERE (((p.activity)::text = 'bike'::text) AND (public.st_contains(gb.geom, p.geom) IS TRUE) AND (p.auto_generated IS NULL))
  ORDER BY 1;


ALTER TABLE public."5)point_bike_out_of_geofence" OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 23979)
-- Name: 5)DBSCAN_cluster_bike; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)DBSCAN_cluster_bike" AS
 SELECT ksub.centroid,
    count(*) AS number_points,
    public.st_centroid(public.st_collect(ksub.geom)) AS geom_of_centroid,
    public.st_envelope(public.st_collect(ksub.geom)) AS area_of_cluster
   FROM ( SELECT public.st_clusterdbscan(public.st_transform("5)point_bike_out_of_geofence".geom, 5243), eps => (175)::double precision, minpoints => 3) OVER () AS centroid,
            "5)point_bike_out_of_geofence".geom
           FROM public."5)point_bike_out_of_geofence") ksub
  WHERE (ksub.centroid IS NOT NULL)
  GROUP BY ksub.centroid
  ORDER BY ksub.centroid;


ALTER TABLE public."5)DBSCAN_cluster_bike" OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 24066)
-- Name: 5)point_car_out_of_geofence; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)point_car_out_of_geofence" AS
 SELECT p.id,
    p.geom
   FROM public."position" p
  WHERE (((p.activity)::text = 'car'::text) AND (p.auto_generated IS NULL))
EXCEPT
 SELECT DISTINCT ON (p.id) p.id,
    p.geom
   FROM public."position" p,
    public.geofence_car gc
  WHERE (((p.activity)::text = 'car'::text) AND (public.st_contains(gc.geom, p.geom) IS TRUE) AND (p.auto_generated IS NULL))
  ORDER BY 1;


ALTER TABLE public."5)point_car_out_of_geofence" OWNER TO postgres;

--
-- TOC entry 243 (class 1259 OID 24089)
-- Name: 5)DBSCAN_cluster_car; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)DBSCAN_cluster_car" AS
 SELECT ksub.centroid,
    count(*) AS number_points,
    public.st_centroid(public.st_collect(ksub.geom)) AS geom_of_centroid,
    public.st_envelope(public.st_collect(ksub.geom)) AS area_of_cluster
   FROM ( SELECT public.st_clusterdbscan(public.st_transform("5)point_car_out_of_geofence".geom, 5243), eps => (175)::double precision, minpoints => 3) OVER () AS centroid,
            "5)point_car_out_of_geofence".geom
           FROM public."5)point_car_out_of_geofence") ksub
  WHERE (ksub.centroid IS NOT NULL)
  GROUP BY ksub.centroid
  ORDER BY ksub.centroid;


ALTER TABLE public."5)DBSCAN_cluster_car" OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 23673)
-- Name: 5)point_walk_out_of_geofence; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)point_walk_out_of_geofence" AS
 SELECT p.id,
    p.geom
   FROM public."position" p
  WHERE (((p.activity)::text = 'walk'::text) AND (p.auto_generated IS NULL))
EXCEPT
 SELECT DISTINCT ON (p.id) p.id,
    p.geom
   FROM public."position" p,
    public.geofence_walk gw
  WHERE (((p.activity)::text = 'walk'::text) AND (public.st_contains(gw.geom, p.geom) IS TRUE) AND (p.auto_generated IS NULL))
  ORDER BY 1;


ALTER TABLE public."5)point_walk_out_of_geofence" OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 23974)
-- Name: 5)DBSCAN_cluster_walk; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)DBSCAN_cluster_walk" AS
 SELECT ksub.centroid,
    count(*) AS number_points,
    public.st_centroid(public.st_collect(ksub.geom)) AS geom_of_centroid,
    public.st_envelope(public.st_collect(ksub.geom)) AS area_of_cluster
   FROM ( SELECT public.st_clusterdbscan(public.st_transform("5)point_walk_out_of_geofence".geom, 5243), eps => (175)::double precision, minpoints => 3) OVER () AS centroid,
            "5)point_walk_out_of_geofence".geom
           FROM public."5)point_walk_out_of_geofence") ksub
  WHERE (ksub.centroid IS NOT NULL)
  GROUP BY ksub.centroid
  ORDER BY ksub.centroid;


ALTER TABLE public."5)DBSCAN_cluster_walk" OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 24004)
-- Name: 5)DBSCAN_clustered_points_bike; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)DBSCAN_clustered_points_bike" AS
 WITH assign_cluster_id AS (
         SELECT "5)point_bike_out_of_geofence".id,
            "5)point_bike_out_of_geofence".geom,
            public.st_clusterdbscan(public.st_transform("5)point_bike_out_of_geofence".geom, 5243), eps => (175)::double precision, minpoints => 3) OVER () AS cluster_id
           FROM public."5)point_bike_out_of_geofence"
        )
 SELECT assign_cluster_id.id,
    assign_cluster_id.geom,
    assign_cluster_id.cluster_id
   FROM assign_cluster_id
  WHERE (assign_cluster_id.cluster_id IS NOT NULL)
  ORDER BY assign_cluster_id.cluster_id;


ALTER TABLE public."5)DBSCAN_clustered_points_bike" OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 24080)
-- Name: 5)DBSCAN_clustered_points_car; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)DBSCAN_clustered_points_car" AS
 WITH assign_cluster_id AS (
         SELECT "5)point_car_out_of_geofence".id,
            "5)point_car_out_of_geofence".geom,
            public.st_clusterdbscan(public.st_transform("5)point_car_out_of_geofence".geom, 5243), eps => (175)::double precision, minpoints => 3) OVER () AS cluster_id
           FROM public."5)point_car_out_of_geofence"
        )
 SELECT assign_cluster_id.id,
    assign_cluster_id.geom,
    assign_cluster_id.cluster_id
   FROM assign_cluster_id
  WHERE (assign_cluster_id.cluster_id IS NOT NULL)
  ORDER BY assign_cluster_id.cluster_id;


ALTER TABLE public."5)DBSCAN_clustered_points_car" OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 23992)
-- Name: 5)DBSCAN_clustered_points_walk; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)DBSCAN_clustered_points_walk" AS
 WITH assign_cluster_id AS (
         SELECT "5)point_walk_out_of_geofence".id,
            "5)point_walk_out_of_geofence".geom,
            public.st_clusterdbscan(public.st_transform("5)point_walk_out_of_geofence".geom, 5243), eps => (175)::double precision, minpoints => 3) OVER () AS cluster_id
           FROM public."5)point_walk_out_of_geofence"
        )
 SELECT assign_cluster_id.id,
    assign_cluster_id.geom,
    assign_cluster_id.cluster_id
   FROM assign_cluster_id
  WHERE (assign_cluster_id.cluster_id IS NOT NULL)
  ORDER BY assign_cluster_id.cluster_id;


ALTER TABLE public."5)DBSCAN_clustered_points_walk" OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 24021)
-- Name: 5)DBSCAN_not_clustered_points_bike; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)DBSCAN_not_clustered_points_bike" AS
 WITH assign_cluster_id AS (
         SELECT "5)point_bike_out_of_geofence".id,
            "5)point_bike_out_of_geofence".geom,
            public.st_clusterdbscan(public.st_transform("5)point_bike_out_of_geofence".geom, 5243), eps => (175)::double precision, minpoints => 3) OVER () AS cluster_id
           FROM public."5)point_bike_out_of_geofence"
        )
 SELECT assign_cluster_id.id,
    assign_cluster_id.geom
   FROM assign_cluster_id
  WHERE (assign_cluster_id.cluster_id IS NULL)
  ORDER BY assign_cluster_id.cluster_id;


ALTER TABLE public."5)DBSCAN_not_clustered_points_bike" OWNER TO postgres;

--
-- TOC entry 240 (class 1259 OID 24076)
-- Name: 5)DBSCAN_not_clustered_points_car; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)DBSCAN_not_clustered_points_car" AS
 WITH assign_cluster_id AS (
         SELECT "5)point_car_out_of_geofence".id,
            "5)point_car_out_of_geofence".geom,
            public.st_clusterdbscan(public.st_transform("5)point_car_out_of_geofence".geom, 5243), eps => (175)::double precision, minpoints => 3) OVER () AS cluster_id
           FROM public."5)point_car_out_of_geofence"
        )
 SELECT assign_cluster_id.id,
    assign_cluster_id.geom
   FROM assign_cluster_id
  WHERE (assign_cluster_id.cluster_id IS NULL)
  ORDER BY assign_cluster_id.cluster_id;


ALTER TABLE public."5)DBSCAN_not_clustered_points_car" OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 24035)
-- Name: 5)DBSCAN_not_clustered_points_walk; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)DBSCAN_not_clustered_points_walk" AS
 WITH assign_cluster_id AS (
         SELECT "5)point_walk_out_of_geofence".id,
            "5)point_walk_out_of_geofence".geom,
            public.st_clusterdbscan(public.st_transform("5)point_walk_out_of_geofence".geom, 5243), eps => (175)::double precision, minpoints => 3) OVER () AS cluster_id
           FROM public."5)point_walk_out_of_geofence"
        )
 SELECT assign_cluster_id.id,
    assign_cluster_id.geom
   FROM assign_cluster_id
  WHERE (assign_cluster_id.cluster_id IS NULL)
  ORDER BY assign_cluster_id.cluster_id;


ALTER TABLE public."5)DBSCAN_not_clustered_points_walk" OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 23913)
-- Name: 5)KMEANS_cluster_bike; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)KMEANS_cluster_bike" AS
 SELECT ksub.centroid,
    public.st_npoints(public.st_collect(ksub.geom)) AS number_points,
    public.st_centroid(public.st_collect(ksub.geom)) AS geom_of_centroid,
    public.st_envelope(public.st_collect(ksub.geom)) AS area_of_cluster
   FROM ( SELECT public.st_clusterkmeans("5)point_bike_out_of_geofence".geom, 10) OVER () AS centroid,
            "5)point_bike_out_of_geofence".geom
           FROM public."5)point_bike_out_of_geofence") ksub
  GROUP BY ksub.centroid
 HAVING (public.st_npoints(public.st_collect(ksub.geom)) >= 2)
  ORDER BY ksub.centroid;


ALTER TABLE public."5)KMEANS_cluster_bike" OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 24071)
-- Name: 5)KMEANS_cluster_car; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)KMEANS_cluster_car" AS
 SELECT ksub.centroid,
    public.st_npoints(public.st_collect(ksub.geom)) AS number_points,
    public.st_centroid(public.st_collect(ksub.geom)) AS geom_of_centroid,
    public.st_envelope(public.st_collect(ksub.geom)) AS area_of_cluster
   FROM ( SELECT public.st_clusterkmeans("5)point_car_out_of_geofence".geom, 10) OVER () AS centroid,
            "5)point_car_out_of_geofence".geom
           FROM public."5)point_car_out_of_geofence") ksub
  GROUP BY ksub.centroid
 HAVING (public.st_npoints(public.st_collect(ksub.geom)) >= 2)
  ORDER BY ksub.centroid;


ALTER TABLE public."5)KMEANS_cluster_car" OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 23923)
-- Name: 5)KMEANS_cluster_walk; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)KMEANS_cluster_walk" AS
 SELECT ksub.centroid,
    public.st_npoints(public.st_collect(ksub.geom)) AS number_points,
    public.st_centroid(public.st_collect(ksub.geom)) AS geom_of_centroid,
    public.st_envelope(public.st_collect(ksub.geom)) AS area_of_cluster
   FROM ( SELECT public.st_clusterkmeans("5)point_walk_out_of_geofence".geom, 10) OVER () AS centroid,
            "5)point_walk_out_of_geofence".geom
           FROM public."5)point_walk_out_of_geofence") ksub
  GROUP BY ksub.centroid
 HAVING (public.st_npoints(public.st_collect(ksub.geom)) >= 2)
  ORDER BY ksub.centroid;


ALTER TABLE public."5)KMEANS_cluster_walk" OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 23909)
-- Name: 5)KMEANS_clustered_points_bike; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)KMEANS_clustered_points_bike" AS
 SELECT "5)point_bike_out_of_geofence".id,
    "5)point_bike_out_of_geofence".geom,
    public.st_clusterkmeans("5)point_bike_out_of_geofence".geom, 10) OVER () AS cluster_id
   FROM public."5)point_bike_out_of_geofence";


ALTER TABLE public."5)KMEANS_clustered_points_bike" OWNER TO postgres;

--
-- TOC entry 242 (class 1259 OID 24085)
-- Name: 5)KMEANS_clustered_points_car; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)KMEANS_clustered_points_car" AS
 SELECT "5)point_car_out_of_geofence".id,
    "5)point_car_out_of_geofence".geom,
    public.st_clusterkmeans("5)point_car_out_of_geofence".geom, 10) OVER () AS cluster_id
   FROM public."5)point_car_out_of_geofence";


ALTER TABLE public."5)KMEANS_clustered_points_car" OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 23932)
-- Name: 5)KMEANS_clustered_points_walk; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public."5)KMEANS_clustered_points_walk" AS
 SELECT "5)point_walk_out_of_geofence".id,
    "5)point_walk_out_of_geofence".geom,
    public.st_clusterkmeans("5)point_walk_out_of_geofence".geom, 10) OVER () AS cluster_id
   FROM public."5)point_walk_out_of_geofence";


ALTER TABLE public."5)KMEANS_clustered_points_walk" OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 22990)
-- Name: path_bike; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.path_bike (
    gid integer NOT NULL,
    geom public.geometry(LineString,4326)
);


ALTER TABLE public.path_bike OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 23002)
-- Name: path_car; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.path_car (
    gid integer NOT NULL,
    geom public.geometry(LineString,4326)
);


ALTER TABLE public.path_car OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 22996)
-- Name: path_walk; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.path_walk (
    gid integer NOT NULL,
    geom public.geometry(LineString,4326)
);


ALTER TABLE public.path_walk OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 23111)
-- Name: position_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.position_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.position_id_seq OWNER TO postgres;

--
-- TOC entry 3876 (class 0 OID 0)
-- Dependencies: 213
-- Name: position_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.position_id_seq OWNED BY public."position".id;


--
-- TOC entry 216 (class 1259 OID 23405)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    user_id integer NOT NULL,
    registration_token character varying(256)
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 23403)
-- Name: user_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_user_id_seq OWNER TO postgres;

--
-- TOC entry 3877 (class 0 OID 0)
-- Dependencies: 215
-- Name: user_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_user_id_seq OWNED BY public."user".user_id;


--
-- TOC entry 3680 (class 2604 OID 23116)
-- Name: position id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."position" ALTER COLUMN id SET DEFAULT nextval('public.position_id_seq'::regclass);


--
-- TOC entry 3683 (class 2604 OID 23408)
-- Name: user user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN user_id SET DEFAULT nextval('public.user_user_id_seq'::regclass);


--
-- TOC entry 3858 (class 0 OID 22923)
-- Dependencies: 208
-- Data for Name: geofence_bike; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.geofence_bike (gid, message, geom) VALUES (1, 'Aree Rastrelliere Marconi', '0103000020E610000001000000050000001700008043AD2640785501BBDD3F4640EDFFFF7F8FAC2640F74CB369753F46401C00000068AE2640F847CE616B3F46401800004054AF264069D1D0A6C33F46401700008043AD2640785501BBDD3F4640');
INSERT INTO public.geofence_bike (gid, message, geom) VALUES (2, 'Aree Rastrelliere Università', '0103000020E61000000100000007000000FCFFFF3F5CB6264074395FA8C53F4640E5FFFFBF48B32640B93D79CAF13F46400D000040ABB2264037B7069FB93F46400900008097B326408FDE94717F3F4640FEFFFF7F1EB426405D00DD46493F4640E7FFFFFFAAB626405D00DD46493F4640FCFFFF3F5CB6264074395FA8C53F4640');
INSERT INTO public.geofence_bike (gid, message, geom) VALUES (3, 'Aree Rastrelliere Castiglione', '0103000020E610000001000000060000001500000032B72640CAEF298E643E46401900000005B7264032D265D1B63E46401C00000008B42640814F4B0D013F4640F2FFFFFF53B32640B09923CEB23E4640F0FFFF7FD2B4264048A93F84583E46401500000032B72640CAEF298E643E4640');
INSERT INTO public.geofence_bike (gid, message, geom) VALUES (4, 'Aree Rastrelliere Zona Cavour', '0103000020E61000000100000006000000F8FFFF3F19AE2640706702EDD83E4640EEFFFFFFE0AD264084066FAD8A3E4640FEFFFF7F7EAE26407A6082A8843E464011000040AEAF264084066FAD8A3E46401A000080E6AF264096CE19F5E23E4640F8FFFF3F19AE2640706702EDD83E4640');
INSERT INTO public.geofence_bike (gid, message, geom) VALUES (5, 'Aree Rastrelliere Zona Torri', '0103000020E61000000100000007000000080000C086B1264085B11742433F4640EDFFFF7F2FB22640C01BE89BB53F46400B0000C059B1264074395FA8C53F4640F3FFFFBFC4AF2640363440B3D33F4640FDFFFFBF3DAF26409BE3F951573F46401700008013B02640D27A374D513F4640080000C086B1264085B11742433F4640');
INSERT INTO public.geofence_bike (gid, message, geom) VALUES (6, 'Aree Rastrelliere San Felice', '0103000020E61000000100000007000000FBFFFF7FDBAB2640363440B3D33F4640ECFFFFBF7EAA26403AD8E40D4A404640ECFFFFBFAEA7264024F28DBCDF3F464018000040B4A926400599589AB33F46400A00004068AA26408D2F25B0CF3F4640040000C013AC264031B2E7B7D93F4640FBFFFF7FDBAB2640363440B3D33F4640');
INSERT INTO public.geofence_bike (gid, message, geom) VALUES (7, 'Aree Rastrelliere Nosadella', '0103000020E610000001000000070000000E0000007CA92640B12E69DEC63E4640EEFFFFFF10AB264032D265D1B63E4640F6FFFFBFC7AC2640219BE8D7BE3E4640F5FFFFFF86AD26407DEFCAFEEE3E4640EDFFFF7F8FAC2640F40E5B1D153F46401700008073AA2640A8B127322F3F46400E0000007CA92640B12E69DEC63E4640');
INSERT INTO public.geofence_bike (gid, message, geom) VALUES (8, 'Aree Rastrelliere Montagnola', '0103000020E610000001000000050000000E000000ECB12640EB492EE6154046400A000040D8B22640696E362F76404640160000C0D2B0264044B7C74898404640E8FFFFBF4BB02640EF238EF82D4046400E000000ECB12640EB492EE615404640');
INSERT INTO public.geofence_bike (gid, message, geom) VALUES (9, 'Aree Rastrelliere San Petronio', '0103000020E610000001000000060000001900000095AE2640AC50C033313F4640F9FFFF5F62AE26406F60AF0BFF3E4640EBFFFFFFDDB02640F3703601F23E4640E4FFFFFF37B12640AC598938373F4640030000A09AAE264010C1CD4E533F46401900000095AE2640AC50C033313F4640');


--
-- TOC entry 3867 (class 0 OID 24055)
-- Dependencies: 236
-- Data for Name: geofence_car; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.geofence_car (gid, message, geom) VALUES (1, 'Colonnina posta su marciapiede a fianco del primo stallo sosta in linea. \n\n**n. colonnine: 1**', '0103000020E6100000010000000B0000001300002038AF26405A5AE6FD34404640F6FFFFBF97AF264046219D2164404640E6FFFFDFC1B02640CD4B8E1B5C404640F0FFFF1FFAB02640CE9E874999404640110000A0E6AD264036EF765EB5404640FEFFFF7FAEAB264060C1A9276C40464011000040DEAC26408B611CE311404640FEFFFF1F76AD26408DF2DFCFF83F4640FDFFFF5F35AE264024DFEDC8EF3F4640FCFFFF9FF4AE2640834C8CEB1C4046401300002038AF26405A5AE6FD34404640');
INSERT INTO public.geofence_car (gid, message, geom) VALUES (2, 'Via Augusto Righi in fregio al civico 14, in mezzo a stallo auto tra alberature a lisca di pesce, su marciapiede.\n\n**n. colonnine: 1**', '0103000020E61000000100000007000000EDFFFFDF67B026402C9EE8F023404640060000E02CAF2640785501BBDD3F4640040000C0E3AE26401BBE8480923F4640070000A03DB126409944CB707E3F4640140000E048B126404F8079B2D23F464016000020DBB126407396CEE00E404640EDFFFFDF67B026402C9EE8F023404640');
INSERT INTO public.geofence_car (gid, message, geom) VALUES (3, 'Colonnina via San Felice', '0103000020E61000000100000006000000020000E089AC2640A95AE968743F4640FFFFFFDFB6AC2640EA38C165703F46400400000003AA264094A2F890A73F46401A0000203EA9264085B11742433F4640EAFFFF3FFDAB264091119128233F4640020000E089AC2640A95AE968743F4640');
INSERT INTO public.geofence_car (gid, message, geom) VALUES (4, 'Via S. Giacomo in fregio al civico 9/2, una colonnina sul marciapiede a fianco del primo stallo auto in linea dopo gli stalli riservati motocicli.\n\n**n. colonnine: 2**', '0103000020E61000000100000005000000170000E0BBB626408A508040413F46401B0000E08EB6264049C524A2BD3F4640F1FFFF9F1BB526406E175193AA3F4640F2FFFF5F8CB126403B11A14B4F3F4640170000E0BBB626408A508040413F4640');
INSERT INTO public.geofence_car (gid, message, geom) VALUES (5, 'Via Dante Alighieri in prossimità al civico 14, due colonnine sul marciapiede, i primi stalli auto in linea in prossimità di Piazza Giosuè Carducci dopo quelli di ''car sharing''\n\n**n. colonnine: 2**', '0103000020E61000000100000006000000F3FFFF1F6DB62640BA974C3E043E46401A0000204EB72640DA22BA5F2C3E4640030000A00AB72640F36018D7BD3E4640040000604BB6264040D4D8E0C93E4640F5FFFF9FEEB42640DC219882563E4640F3FFFF1F6DB62640BA974C3E043E4640');
INSERT INTO public.geofence_car (gid, message, geom) VALUES (6, 'Viale XII Giugno, una colonnina fronte al civico 2 di via Vascelli, su marciapiede a fianco del primo posto in linea tra alberature dopo fermata ATC.\n\n**n. colonnine: 1**', '0103000020E61000000100000006000000F0FFFF1F2AAE264096CE19F5E23E4640F7FFFF1FD0AD264055BE3071413E46401400004051B22640DA508E56213E4640010000C0E0B12640282B16B8973E4640030000A06AB12640EF6655F8E63E4640F0FFFF1F2AAE264096CE19F5E23E4640');
INSERT INTO public.geofence_car (gid, message, geom) VALUES (7, 'Piazza F.D. Roosvelt in prossimità all''intersezione con via IV Novembre, una colonnina in sostituzione ad un dissuasore esistente che delimita l''area di sosta dal percorso pedonale, su sede stradale a fianco del posto auto a pettine. \n\n**n. colonnine: 1**', '0103000020E61000000100000005000000180000A08CAD2640C2A93960693F4640E7FFFF9F32AD264043A1C21F183F4640090000E0FFAE2640F74D130AFD3E46400600004035B026405EA2024E523F4640180000A08CAD2640C2A93960693F4640');
INSERT INTO public.geofence_car (gid, message, geom) VALUES (8, 'Colonnina di Via Reno', '0103000020E61000000100000006000000E6FFFF7F19AA26403E3845DF0C40464014000040E1A926404093B4AAC83F4640E6FFFFDF21AB26402EDE9F8EA43F4640F6FFFFBFC7AC2640B5DE24899D3F46400D0000400BAD2640B70430D2FB3F4640E6FFFF7F19AA26403E3845DF0C404640');
INSERT INTO public.geofence_car (gid, message, geom) VALUES (9, 'Via Ugo Foscolo, sul marciapiede a fianco dello stallo sosta in linea precedente l''accesso al civico 7.\n\n**n. colonnine: 1**', '0103000020E610000001000000040000001C000000C8A82640EB1D48D6BC3E4640ECFFFFBF7EAA264085C15D251F3F4640EEFFFFFF40A826405D00DD46493F46401C000000C8A82640EB1D48D6BC3E4640');


--
-- TOC entry 3862 (class 0 OID 23008)
-- Dependencies: 212
-- Data for Name: geofence_walk; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.geofence_walk (gid, message, geom) VALUES (1, 'https://www.bolognawelcome.com/uffici-informazione/bologna-welcome-piazza-maggiore/', '0103000020E6100000010000000D000000E5FFFF1FB1AE2640EA38C165703F4640F1FFFF3F73AE2640586B213A393F4640110000A0E6AD26408D43853C3C3F4640FEFFFF1F76AD2640A05BE10AFE3E46400500008024AE2640C0DF0402F33E46401B0000E01EAE26406FACB7F6E43E4640FFFFFF3F8FB0264061BCC1FAE93E46400E0000A0E3B0264085C15D251F3F4640EEFFFFFFB0B02640CCA22A26203F4640160000C0D2B026406E094645473F4640F8FFFF3FE9B02640B869B05A623F4640F5FFFF9F4EAF2640924E8B66713F4640E5FFFF1FB1AE2640EA38C165703F4640');
INSERT INTO public.geofence_walk (gid, message, geom) VALUES (2, 'https://www.bolognawelcome.com/home/scopri/luoghi/cultura-e-storia/passato-presente/universita-di-bologna/', '0103000020E61000000100000008000000F2FFFFFF53B326401A5C8475843F46401900000035B426408A508040413F4640F0FFFF1F9AB62640586B213A393F4640FCFFFF3F5CB6264069D1D0A6C33F4640F7FFFF1F70B32640AA0F55CEF63F464012000060C7B226400599589AB33F4640FBFFFFDF83B2264091293997AF3F4640F2FFFFFF53B326401A5C8475843F4640');
INSERT INTO public.geofence_walk (gid, message, geom) VALUES (3, 'https://www.bolognawelcome.com/home/scopri/luoghi/architettura-e-monumenti/edifici-religiosi/complesso-di-santo-stefano/', '0103000020E610000001000000060000000B0000C059B1264062C08F20193F46400B0000C059B1264061BCC1FAE93E46401300002008B226407A6082A8843E46400A0000A0E0B32640C6481E12073F4640060000E0FCB12640EBFC2436343F46400B0000C059B1264062C08F20193F4640');
INSERT INTO public.geofence_walk (gid, message, geom) VALUES (4, 'https://www.bolognawelcome.com/home/scopri/luoghi/architettura-e-monumenti/edifici-religiosi/basilica-di-san-francesco/', '0103000020E610000001000000080000000B00000079AC26403781C01B133F4640E6FFFF7FE9AC26406F5B5567723F46400A0000A070AB2640B78CCE7B8C3F4640FCFFFF3F1CAB264059EF8E302D3F4640FCFFFFFF5CAA26409643BD37363F4640160000602AAA2640192DF31A123F4640040000C013AC2640F3703601F23E46400B00000079AC26403781C01B133F4640');
INSERT INTO public.geofence_walk (gid, message, geom) VALUES (5, 'https://www.bolognawelcome.com/home/scopri/luoghi/cultura-e-storia/musei-e-gallerie-arte/mambo-museo-darte-moderna-di-bologna/', '0103000020E61000000100000007000000000000A0F7AB2640337897AECD3F4640FEFFFF1F76AD2640323354BDE03F4640EEFFFFFFE0AD264073E906F72B404640F1FFFF9FABAC2640778C5F0C48404640FDFFFF5F65AB26409B58170A4540464010000080CDAA264031F4FF033D404640000000A0F7AB2640337897AECD3F4640');
INSERT INTO public.geofence_walk (gid, message, geom) VALUES (6, 'https://www.bolognawelcome.com/home/scopri/luoghi/architettura-e-monumenti/edifici-religiosi/oratorio-san-filippo-neri/', '0103000020E61000000100000006000000190000609DAF2640FFC77BF7863F46400A00004008B0264040AF433FE33F4640F3FFFF8F40AF26406D50B73DE13F4640140000B0F4AD2640EAF93ABADC3F4640E5FFFFBFA8AD2640E8871682943F4640190000609DAF2640FFC77BF7863F4640');
INSERT INTO public.geofence_walk (gid, message, geom) VALUES (7, 'https://www.bolognawelcome.com/home/find-book/le-due-torri-torre-degli-asinelli/', '0103000020E61000000100000005000000E6FFFF3FCAB12640E066ED3A3A3F4640F3FFFFBF94B22640D6C262636D3F4640FEFFFF7F4EB126400248F0555C3F4640170000E01BB1264026EFAE43453F4640E6FFFF3FCAB12640E066ED3A3A3F4640');
INSERT INTO public.geofence_walk (gid, message, geom) VALUES (8, 'Stazione FS', '0103000020E61000000100000007000000050000201CAD264044B7C74898404640E7FFFFFF3AAE26405B1DDA0A46404640180000A05CB02640258BCAF72C404640F8FFFF3FE9B026406353074B9B404640F9FFFF5F62AE264082F97A5BB140464009000080F7AD264091D6355FB6404640050000201CAD264044B7C74898404640');
INSERT INTO public.geofence_walk (gid, message, geom) VALUES (9, 'https://www.bolognawelcome.com/en/home/discover/places/architecture-and-monuments/religious-places/basilica-of-san-domenico/', '0103000020E6100000010000000A000000F3FFFF4F51B12640F505F159C13E4640F3FFFF4F51B126409739F9DBC33E4640E7FFFF9F02B02640D58CE7E4CE3E4640FAFFFFEFEEAF26401C25D15EC73E4640EBFFFF5F16AF26401C25D15EC73E46401900000095AE26404F0FCE51B73E464009000080F7AD2640394A36D2B73E4640EEFFFFFFE0AD26407A6082A8843E4640110000A0B6B026400D522D9C753E4640F3FFFF4F51B12640F505F159C13E4640');
INSERT INTO public.geofence_walk (gid, message, geom) VALUES (10, 'Giardini Margherita', '0103000020E6100000010000000A000000EEFFFFFF50B62640168DC83B013E4640040000C053B72640D9B939622F3E4640EEFFFF3F10B72640515195D0B53E4640F7FFFF1F40B6264036FB08E0C83E46400B000000E9B42640DC219882563E4640F4FFFF7FA5B42640A165DC8A603E4640F1FFFF3F13B42640DFA1B669383E4640EEFFFFFF80B32640555FDE6D3D3E4640FFFFFF3F5FB326402D440A4F183E4640EEFFFFFF50B62640168DC83B013E4640');


--
-- TOC entry 3859 (class 0 OID 22990)
-- Dependencies: 209
-- Data for Name: path_bike; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.path_bike (gid, geom) VALUES (1, '0102000020E610000003000000F0FFFF1F2AAE26407FB4910843404640E6FFFF3FCAB126407396CEE00E4046400F00002035B2264098872C104D404640');
INSERT INTO public.path_bike (gid, geom) VALUES (2, '0102000020E610000003000000160000606AB52640493321B7D83F46400700000016B526407628688FA53F4640F3FFFFBF94B22640D6C262636D3F4640');
INSERT INTO public.path_bike (gid, geom) VALUES (3, '0102000020E61000000900000001000020E9B22640694F94EAD53E4640EBFFFFFFDDB02640EF3624F9E73E46401A0000C0D5AD26406FACB7F6E43E46401A0000C0D5AD2640F31233ECD73E464016000060FAAC26409C2B29DBC23E46400D0000E002AC26400BF588D9C03E4640EAFFFFDFF4AA2640394A36D2B73E464003000040C2AA264084066FAD8A3E4640EEFFFFFFE0AD264055BE3071413E4640');
INSERT INTO public.path_bike (gid, geom) VALUES (4, '0102000020E610000006000000E6FFFF7FE9AC26403CE7C31757404640FDFFFFBF6DAC264086A4D8ED1F404640080000C0E6AB2640EEB351F92E404640030000A0CAAB2640AFB6BBDD0A404640F3FFFFBF24AA2640EA7B80DE0B404640050000204CAA26408EC3B2B1D13F4640');
INSERT INTO public.path_bike (gid, geom) VALUES (5, '0102000020E610000008000000080000205FB5264015E50C68363E4640030000A03AB426400C894AA07A3E46401400004021B526403FC672BFA03E4640F7FFFF1F70B3264010CC86E6D03E4640E8FFFFBF1BB326409739F9DBC33E46401A000020AEB12640387BF726213F4640F9FFFF5F32B1264079E4C3231D3F4640F0FFFF1F2AAE2640D3FC1C3E3E3F4640');
INSERT INTO public.path_bike (gid, geom) VALUES (6, '0102000020E610000005000000FDFFFF5FD5B32640791DC8EA1B404640EAFFFFDF64B32640F2908FCDF53F464000000000A0B226408EF644D5FF3F4640010000C0E0B12640A7120198B03F4640EEFFFF3F70B126403BEEBA74833F4640');
INSERT INTO public.path_bike (gid, geom) VALUES (7, '0102000020E61000000B000000F5FFFF3FE6B3264026EFAE43453F4640FAFFFFBF3AB226405D00DD46493F4640060000E0FCB12640F5928C34323F4640160000C0D2B02640C354E342443F4640FDFFFF5F05B12640F74CB369753F4640100000806DB026408D416E6E7B3F4640F5FFFFFF56B026403D1D1777863F4640090000E0FFAE26400AAB977C8D3F464009000080F7AD264055F47084973F4640FAFFFF1FA3AD2640B5DE24899D3F464009000080F7AD26405303BFC2E73F4640');
INSERT INTO public.path_bike (gid, geom) VALUES (8, '0102000020E610000005000000E9FFFF1FF4B62640F3703601F23E4640030000A00AB7264084066FAD8A3E464002000080C1B62640DA0CC2A27D3E4640F4FFFFDFADB52640729844B7963E46401B0000E08EB62640E17190FBEA3E4640');
INSERT INTO public.path_bike (gid, geom) VALUES (9, '0102000020E610000003000000040000C083B426400AD277D5BB3E4640FFFFFFDF26B52640EF6655F8E63E464001000020B9B52640ECF5A0EEDA3E4640');
INSERT INTO public.path_bike (gid, geom) VALUES (10, '0102000020E610000002000000E4FFFF5F10B52640B2B4747E513E46400D0000407BB5264077E2DDA6823E4640');
INSERT INTO public.path_bike (gid, geom) VALUES (11, '0102000020E610000004000000180000A05CB02640D9B939622F3E4640FCFFFF3FBCB026400D522D9C753E4640FAFFFFBF3AB226406694EFA17C3E46400B0000C059B126405C6A5819103F4640');
INSERT INTO public.path_bike (gid, geom) VALUES (12, '0102000020E610000003000000E3FFFF9F2FB02640C55E69966E3E46401800004054AF264059AE8ABA9A3E46401400004081AF264040D4D8E0C93E4640');


--
-- TOC entry 3861 (class 0 OID 23002)
-- Dependencies: 211
-- Data for Name: path_car; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.path_car (gid, geom) VALUES (1, '0102000020E6100000020000000E0000A083B62640DB0998A7C43F4640F0FFFF1F5AAB264060C1A9276C404640');
INSERT INTO public.path_car (gid, geom) VALUES (2, '0102000020E61000000B000000180000A0BCAA2640E99D88B18F3E46401A0000C005AB264074B906D3B83E46400E0000A013AE264071D24AF4E13E4640010000C010AF264071D24AF4E13E46400200008051AE264025F5FDB3923E4640FCFFFF3FBCB02640F4925A9B743E4640070000A03DB126406A58A1B5943E4640060000E0FCB1264034ABCFB4933E4640E4FFFF5F40B2264076941C80533E4640110000407EB22640E050C481553E4640150000A059B32640C71FD7D3B93E4640');
INSERT INTO public.path_car (gid, geom) VALUES (3, '0102000020E6100000050000001C00000008B42640655C7D0C003F46400B0000C029B426407A4A6C4C503F4640EAFFFFDF64B3264019F82773813F4640080000208FB2264094A2F890A73F46400A000040D8B2264051DF06B4D43F4640');
INSERT INTO public.path_car (gid, geom) VALUES (4, '0102000020E610000005000000F2FFFF5F2CB7264074B906D3B83E46401C000000D8B6264031BB26AA863E4640170000E0BBB626406694EFA17C3E4640FCFFFF3F8CB326404F2A48E3CC3E4640E7FFFFFFDAB3264061BCC1FAE93E4640');
INSERT INTO public.path_car (gid, geom) VALUES (5, '0102000020E61000000C000000F6FFFFBF97AF2640D6C262636D3F4640090000E0FFAE2640CA7899FFEF3E4640EBFFFF5F16AF2640F3703601F23E4640E9FFFF7F8CAF2640F3703601F23E464000000000D0AF26402ED0251A113F464004000060ABB02640C6481E12073F464000000060D8B0264065D790241E3F46401900000065B12640A8D65C211A3F4640060000E0FCB12640EBFC2436343F46400600004005B3264065D790241E3F4640E8FFFFBF1BB32640EBFC2436343F4640180000A02CB32640DABF8F53593F4640');
INSERT INTO public.path_car (gid, geom) VALUES (6, '0102000020E6100000060000000B000060B1AA26405DD99C0B47404640FBFFFF7FDBAB2640337897AECD3F46401A0000C005AB2640336026A9C63F4640040000600BAB2640F3B393879B3F4640FDFFFF5F65AB26408D416E6E7B3F4640E6FFFFDF21AB2640E8665539383F4640');
INSERT INTO public.path_car (gid, geom) VALUES (7, '0102000020E610000006000000FDFFFF5FA5B626408D43853C3C3F4640F0FFFF7FD2B42640D3FC1C3E3E3F46400F00002005B52640EA38C165703F46400D0000407BB5264055F47084973F4640E6FFFFDF61B626408F70E077873F46400C0000803AB62640DF9AE0BEE23F4640');
INSERT INTO public.path_car (gid, geom) VALUES (8, '0102000020E610000003000000EAFFFFDF64B32640C556A5D0F93F46400000006008AE264098872C104D404640F6FFFF5F8FAE2640A6CB874695404640');
INSERT INTO public.path_car (gid, geom) VALUES (9, '0102000020E61000000600000013000080D0A72640BA4D5C889C3F4640160000206BA9264037B7069FB93F46401A00008046AA26404D28AEB8DA3F4640ECFFFF1F87AB264074395FA8C53F46400A00004038AD2640EAF93ABADC3F4640110000A0E6AD264073E906F72B404640');
INSERT INTO public.path_car (gid, geom) VALUES (10, '0102000020E610000006000000FEFFFF7F4EB126405B0EBB565D3F4640040000C0B3B1264055F47084973F4640150000A089B0264091293997AF3F4640FEFFFF7F4EB12640FB8F14ED1E40464011000040DEAC26400D0D8618584046400100002049AD2640D00BC254A8404640');
INSERT INTO public.path_car (gid, geom) VALUES (11, '0102000020E610000003000000F0FFFF7FD2B42640F4ADF2E616404640070000604EB32640F1F2C898B13F4640F7FFFF1F70B3264042E82E51563F4640');
INSERT INTO public.path_car (gid, geom) VALUES (12, '0102000020E61000000D0000000F000060F4B22640795B7BE8184046401B000040F7B1264049C524A2BD3F46400A00004008B02640766B1ABEE13F4640090000E0FFAE26404D28AEB8DA3F4640E6FFFFDFF1AD26404D28AEB8DA3F4640FFFFFF3FBFAD26404411CB869A3F46400A00004038AD26400C8BD78DA33F4640FBFFFFDFE3AC2640F847CE616B3F4640F5FFFF9F7EAC2640CCFB8A180F3F4640F9FFFFFF59AD2640CA7899FFEF3E464004000000D3AC264072CD7BF3E03E46400D0000E002AC26402AF76F04F63E46400D0000E032A92640192DF31A123F4640');
INSERT INTO public.path_car (gid, geom) VALUES (13, '0102000020E6100000060000000B00000019B2264048D1053F8B4046400D0000E0D2AE264028043A5CB2404640E6FFFFDFF1AD264094577261B940464016000060FAAC26409FE4864C9D4046400E0000A013AE2640F38A54094440464016000060FAAC26400599589AB33F4640');


--
-- TOC entry 3860 (class 0 OID 22996)
-- Dependencies: 210
-- Data for Name: path_walk; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.path_walk (gid, geom) VALUES (1, '0102000020E610000004000000160000C072B62640336026A9C63F4640F3FFFFBF94B22640681AF7646F3F46400A000040D8B22640CCA22A26203F464012000060C7B22640A98A5011063F4640');
INSERT INTO public.path_walk (gid, geom) VALUES (2, '0102000020E610000007000000170000E0BBB626408D43853C3C3F4640030000A00AB726400AD277D5BB3E46400A0000A0B0B62640219BE8D7BE3E46400E0000A083B626402E3215C1A23E4640F9FFFF5FD2B626403EDBF8AA873E4640120000C09FB6264026131DA17B3E46400900008097B326404F2A48E3CC3E4640');
INSERT INTO public.path_walk (gid, geom) VALUES (3, '0102000020E610000007000000FEFFFF1F46B026408386ACF1244046401300002038AF26408F9B5FFC324046400700000076AF26408165DB2063404640ECFFFF1F57AE26400E2CB42D74404640F7FFFF7FD8AE264002FFB75DB4404640110000A0E6AD264094577261B9404640FEFFFF1FA6AA26400D0D861858404640');
INSERT INTO public.path_walk (gid, geom) VALUES (4, '0102000020E610000003000000EEFFFFFFB0B02640EF6655F8E63E46400C00002092AF264071D24AF4E13E464011000040AEAF26405C6A5819103F4640');
INSERT INTO public.path_walk (gid, geom) VALUES (5, '0102000020E6100000040000000C000080CAAD2640C228AE73443E4640F5FFFFFF56B02640D9B939622F3E4640EAFFFFDF94B0264048A93F84583E464004000000A3AF26406A58A1B5943E4640');
INSERT INTO public.path_walk (gid, geom) VALUES (6, '0102000020E61000000700000014000040B1AC2640611939DFC73E4640050000201CAD264033187708FB3E46400400000003AA26408D43853C3C3F4640E7FFFF9F62AA2640D6C262636D3F4640180000A0BCAA2640B5DE24899D3F4640F0FFFF7F92A92640BB32ECA2BE3F4640F8FFFFDF40AA2640363440B3D33F4640');
INSERT INTO public.path_walk (gid, geom) VALUES (7, '0102000020E6100000030000001B000040F7B126400C4F5DA1BC3F4640F8FFFFDFB0B226401A326DDB07404640F7FFFF1F70B326403AD8E40D4A404640');
INSERT INTO public.path_walk (gid, geom) VALUES (8, '0102000020E610000005000000170000E0BBB62640B78CCE7B8C3F4640150000A029B626401A5C8475843F4640FAFFFFBF0AB52640CA650286993F4640160000606AB52640FA1A94B5D63F46400200008021B1264017DD69E514404640');
INSERT INTO public.path_walk (gid, geom) VALUES (9, '0102000020E610000008000000F3FFFFBFF4AC264037813F1655404640E8FFFF5F73AC264009AD24F022404640E4FFFF5FA0AC2640F4ADF2E616404640EDFFFF7F8FAC2640065E1ED9044046400000000000AD264088851ACFF73F4640050000201CAD26408EC3B2B1D13F464019000060CDAC26408B65057B8B3F4640EBFFFF5F46AC26409624513D3D3F4640');
INSERT INTO public.path_walk (gid, geom) VALUES (10, '0102000020E610000006000000F5FFFFFF56B0264093377196AE3F46400E0000001CAF2640217B779DB73F46400700000076AF26404F8FBAD3FD3F4640F6FFFFBF97AF26405DD157E2104046400000006008AE2640EF238EF82D404640170000E04BAE2640F1A0192062404640');
INSERT INTO public.path_walk (gid, geom) VALUES (11, '0102000020E61000000B000000FFFFFFDF26B526400304F0160D3F4640090000E09FB42640B3E8F6221C3F464013000020D8B42640CCA22A26203F4640E4FFFF5F10B52640586B213A393F46400400000043B526405EA2024E523F46400D0000E072B426405B0EBB565D3F4640F6FFFF5F2FB426409BE3F951573F46401C0000A0FFB226405B2EA883963F464017000080E3B226408F70E077873F4640FAFFFFBF3AB226407628688FA53F464016000020DBB12640F2693090A63F4640');
INSERT INTO public.path_walk (gid, geom) VALUES (12, '0102000020E6100000030000001A0000C075B32640E59188C3A53E46400B0000C059B12640EBFC2436343F4640080000C086B12640A95AE968743F4640');


--
-- TOC entry 3864 (class 0 OID 23113)
-- Dependencies: 214
-- Data for Name: position; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1040, 13, 44.50204569925787, 11.340165138244629, 'bike', DEFAULT, '2020-04-20 18:59:04.05257', 'bascdyrnlbeaclerqnjzqrukiuexoobfsrkjfostxatefbcjdbyplrhwhqzyisqdlsnfyuinhxqlydbovocykefovuevcricmfwnemkimusqwkvurcezktyxqldcqbci', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1041, 13, 44.50045404517453, 11.347246170043945, 'bike', DEFAULT, '2020-04-20 18:59:40.129361', 'bascdyrnlbeaclerqnjzqrukiuexoobfsrkjfostxatefbcjdbyplrhwhqzyisqdlsnfyuinhxqlydbovocykefovuevcricmfwnemkimusqwkvurcezktyxqldcqbci', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1042, 13, 44.50235178159998, 11.34806156158447, 'bike', DEFAULT, '2020-04-20 19:00:18.217874', 'bascdyrnlbeaclerqnjzqrukiuexoobfsrkjfostxatefbcjdbyplrhwhqzyisqdlsnfyuinhxqlydbovocykefovuevcricmfwnemkimusqwkvurcezktyxqldcqbci', NULL, 8);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1043, 14, 44.4988011276351, 11.354327201843262, 'bike', DEFAULT, '2020-04-20 19:01:35.48504', 'jctwdbjiuprwilvycrcwlvmqfhxnlkqpynrmrqdyshcowmpcxqbdvnovvxenaccmmpipiskjdsqgzlmidivjpwwtxmyuntalqefrtqtohumhvimbuuoxebqpnwbzoukm', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1044, 14, 44.497239995821396, 11.353683471679688, 'bike', DEFAULT, '2020-04-20 19:02:34.186915', 'jctwdbjiuprwilvycrcwlvmqfhxnlkqpynrmrqdyshcowmpcxqbdvnovvxenaccmmpipiskjdsqgzlmidivjpwwtxmyuntalqefrtqtohumhvimbuuoxebqpnwbzoukm', NULL, 2);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1045, 14, 44.49552576372451, 11.348791122436523, 'bike', DEFAULT, '2020-04-20 19:03:50.923816', 'jctwdbjiuprwilvycrcwlvmqfhxnlkqpynrmrqdyshcowmpcxqbdvnovvxenaccmmpipiskjdsqgzlmidivjpwwtxmyuntalqefrtqtohumhvimbuuoxebqpnwbzoukm', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1046, 15, 44.49090320817673, 11.349434852600098, 'bike', DEFAULT, '2020-04-20 19:05:43.89605', 'kwxiyxvjgsyntmekyiwjauadseoylbqpaqzvntemuqypwncyhwmoirbyewgnetlfrefdmzdbukjnynraqngktsetkhuhvkykqlsyzoleviekzgafmftjvqnngjhyyzzb', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1047, 15, 44.49145426052367, 11.345443725585938, 'bike', DEFAULT, '2020-04-20 19:06:28.201153', 'kwxiyxvjgsyntmekyiwjauadseoylbqpaqzvntemuqypwncyhwmoirbyewgnetlfrefdmzdbukjnynraqngktsetkhuhvkykqlsyzoleviekzgafmftjvqnngjhyyzzb', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1048, 15, 44.4913624188274, 11.339521408081055, 'bike', DEFAULT, '2020-04-20 19:07:46.299802', 'kwxiyxvjgsyntmekyiwjauadseoylbqpaqzvntemuqypwncyhwmoirbyewgnetlfrefdmzdbukjnynraqngktsetkhuhvkykqlsyzoleviekzgafmftjvqnngjhyyzzb', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1049, 15, 44.49096443647238, 11.339521408081055, 'bike', DEFAULT, '2020-04-20 19:08:47.813416', 'kwxiyxvjgsyntmekyiwjauadseoylbqpaqzvntemuqypwncyhwmoirbyewgnetlfrefdmzdbukjnynraqngktsetkhuhvkykqlsyzoleviekzgafmftjvqnngjhyyzzb', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1050, 15, 44.49032153616206, 11.337847709655762, 'bike', DEFAULT, '2020-04-20 19:09:36.071122', 'kwxiyxvjgsyntmekyiwjauadseoylbqpaqzvntemuqypwncyhwmoirbyewgnetlfrefdmzdbukjnynraqngktsetkhuhvkykqlsyzoleviekzgafmftjvqnngjhyyzzb', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1051, 15, 44.49026030719147, 11.335959434509277, 'bike', DEFAULT, '2020-04-20 19:10:55.837035', 'kwxiyxvjgsyntmekyiwjauadseoylbqpaqzvntemuqypwncyhwmoirbyewgnetlfrefdmzdbukjnynraqngktsetkhuhvkykqlsyzoleviekzgafmftjvqnngjhyyzzb', NULL, 7);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1052, 15, 44.48998477602839, 11.33389949798584, 'bike', DEFAULT, '2020-04-20 19:11:46.568554', 'kwxiyxvjgsyntmekyiwjauadseoylbqpaqzvntemuqypwncyhwmoirbyewgnetlfrefdmzdbukjnynraqngktsetkhuhvkykqlsyzoleviekzgafmftjvqnngjhyyzzb', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1053, 15, 44.48860710068857, 11.333513259887695, 'bike', DEFAULT, '2020-04-20 19:12:30.833093', 'kwxiyxvjgsyntmekyiwjauadseoylbqpaqzvntemuqypwncyhwmoirbyewgnetlfrefdmzdbukjnynraqngktsetkhuhvkykqlsyzoleviekzgafmftjvqnngjhyyzzb', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1054, 15, 44.48637213592578, 11.339607238769531, 'bike', DEFAULT, '2020-04-20 19:12:42.031567', 'kwxiyxvjgsyntmekyiwjauadseoylbqpaqzvntemuqypwncyhwmoirbyewgnetlfrefdmzdbukjnynraqngktsetkhuhvkykqlsyzoleviekzgafmftjvqnngjhyyzzb', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1055, 16, 44.50265786233514, 11.337718963623047, 'bike', DEFAULT, '2020-04-20 19:13:52.534766', 'dryijlgynksuahvkgvwuybacneumjioprpvpmnkzzbguowtvfhmwlhaiducnvagnmmompocxmurzxdjpoqbibbzhejywevivdkxoythpzekyeylztvfxnwycnqynimjq', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1056, 16, 44.50097439840558, 11.336774826049805, 'bike', DEFAULT, '2020-04-20 19:16:06.397617', 'dryijlgynksuahvkgvwuybacneumjioprpvpmnkzzbguowtvfhmwlhaiducnvagnmmompocxmurzxdjpoqbibbzhejywevivdkxoythpzekyeylztvfxnwycnqynimjq', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1057, 16, 44.501433529752724, 11.335744857788086, 'bike', DEFAULT, '2020-04-20 19:16:50.035401', 'dryijlgynksuahvkgvwuybacneumjioprpvpmnkzzbguowtvfhmwlhaiducnvagnmmompocxmurzxdjpoqbibbzhejywevivdkxoythpzekyeylztvfxnwycnqynimjq', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1058, 16, 44.500331608445244, 11.335530281066895, 'bike', DEFAULT, '2020-04-20 19:18:11.311585', 'dryijlgynksuahvkgvwuybacneumjioprpvpmnkzzbguowtvfhmwlhaiducnvagnmmompocxmurzxdjpoqbibbzhejywevivdkxoythpzekyeylztvfxnwycnqynimjq', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1059, 16, 44.500362217651656, 11.332311630249023, 'bike', DEFAULT, '2020-04-20 19:19:32.35591', 'dryijlgynksuahvkgvwuybacneumjioprpvpmnkzzbguowtvfhmwlhaiducnvagnmmompocxmurzxdjpoqbibbzhejywevivdkxoythpzekyeylztvfxnwycnqynimjq', NULL, 6);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1061, 17, 44.48603535298946, 11.354241371154785, 'bike', DEFAULT, '2020-04-20 19:23:38.760151', 'aclsfsehhojtppwjsjmjtokatisnnqkgufcwaxrtqupffdxesxccpumvzrbdldtscnvppvqxdrsclsjkcihezizxcvxzukkycopztscbzjetqnsvbwnqfzwzriiodqwg', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1062, 17, 44.4881172527258, 11.352009773254395, 'bike', DEFAULT, '2020-04-20 19:25:05.437835', 'aclsfsehhojtppwjsjmjtokatisnnqkgufcwaxrtqupffdxesxccpumvzrbdldtscnvppvqxdrsclsjkcihezizxcvxzukkycopztscbzjetqnsvbwnqfzwzriiodqwg', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1063, 17, 44.4892806349203, 11.353769302368164, 'bike', DEFAULT, '2020-04-20 19:27:13.627098', 'aclsfsehhojtppwjsjmjtokatisnnqkgufcwaxrtqupffdxesxccpumvzrbdldtscnvppvqxdrsclsjkcihezizxcvxzukkycopztscbzjetqnsvbwnqfzwzriiodqwg', NULL, 3);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1064, 17, 44.490750137156354, 11.350464820861816, 'bike', DEFAULT, '2020-04-20 19:28:43.202534', 'aclsfsehhojtppwjsjmjtokatisnnqkgufcwaxrtqupffdxesxccpumvzrbdldtscnvppvqxdrsclsjkcihezizxcvxzukkycopztscbzjetqnsvbwnqfzwzriiodqwg', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1065, 17, 44.49035215062323, 11.349821090698242, 'bike', DEFAULT, '2020-04-20 19:30:15.642515', 'aclsfsehhojtppwjsjmjtokatisnnqkgufcwaxrtqupffdxesxccpumvzrbdldtscnvppvqxdrsclsjkcihezizxcvxzukkycopztscbzjetqnsvbwnqfzwzriiodqwg', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1066, 17, 44.49319922527361, 11.347031593322752, 'bike', DEFAULT, '2020-04-20 19:30:57.738748', 'aclsfsehhojtppwjsjmjtokatisnnqkgufcwaxrtqupffdxesxccpumvzrbdldtscnvppvqxdrsclsjkcihezizxcvxzukkycopztscbzjetqnsvbwnqfzwzriiodqwg', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1067, 17, 44.49307677331033, 11.34608745574951, 'bike', DEFAULT, '2020-04-20 19:31:40.574577', 'aclsfsehhojtppwjsjmjtokatisnnqkgufcwaxrtqupffdxesxccpumvzrbdldtscnvppvqxdrsclsjkcihezizxcvxzukkycopztscbzjetqnsvbwnqfzwzriiodqwg', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1068, 17, 44.49408699431814, 11.340165138244629, 'bike', DEFAULT, '2020-04-20 19:32:02.602378', 'aclsfsehhojtppwjsjmjtokatisnnqkgufcwaxrtqupffdxesxccpumvzrbdldtscnvppvqxdrsclsjkcihezizxcvxzukkycopztscbzjetqnsvbwnqfzwzriiodqwg', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1069, 18, 44.500851962769026, 11.351237297058105, 'bike', DEFAULT, '2020-04-20 19:34:43.572992', 'qnqumcbdzrfnqqehtzuptipokhofvudilbgotjxftncrsctycrumayycvxcfpjlusoimujbdvaahwdhpcgaiduvqxexyhitdmlfriudwgwmeryqweqfkkfaidkddmmzu', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1070, 18, 44.499688811398194, 11.35037899017334, 'bike', DEFAULT, '2020-04-20 19:36:01.606094', 'qnqumcbdzrfnqqehtzuptipokhofvudilbgotjxftncrsctycrumayycvxcfpjlusoimujbdvaahwdhpcgaiduvqxexyhitdmlfriudwgwmeryqweqfkkfaidkddmmzu', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1071, 18, 44.499994906113955, 11.348876953125, 'bike', DEFAULT, '2020-04-20 19:36:15.777639', 'qnqumcbdzrfnqqehtzuptipokhofvudilbgotjxftncrsctycrumayycvxcfpjlusoimujbdvaahwdhpcgaiduvqxexyhitdmlfriudwgwmeryqweqfkkfaidkddmmzu', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1060, 16, 44.49858685711578, 11.332612037658691, 'bike', DEFAULT, '2020-04-20 19:20:33.382449', 'dryijlgynksuahvkgvwuybacneumjioprpvpmnkzzbguowtvfhmwlhaiducnvagnmmompocxmurzxdjpoqbibbzhejywevivdkxoythpzekyeylztvfxnwycnqynimjq', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1072, 18, 44.49757671406164, 11.347417831420898, 'bike', DEFAULT, '2020-04-20 19:37:07.304011', 'qnqumcbdzrfnqqehtzuptipokhofvudilbgotjxftncrsctycrumayycvxcfpjlusoimujbdvaahwdhpcgaiduvqxexyhitdmlfriudwgwmeryqweqfkkfaidkddmmzu', NULL, 5);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1096, 23, 44.48796417439378, 11.345186233520508, 'bike', DEFAULT, '2020-04-20 20:19:46.23585', 'buvuqfwtkmqbohhdaxiwhmiycivquxrdtygnmllpvhemssxgnkxspufywiurcngrojwbqfxxauzoltevhsgeumzggpywlxazwjpmmzzumgfomdezknkpenmohdhodbjv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1073, 18, 44.49619921805834, 11.346559524536133, 'bike', DEFAULT, '2020-04-20 19:37:53.966525', 'qnqumcbdzrfnqqehtzuptipokhofvudilbgotjxftncrsctycrumayycvxcfpjlusoimujbdvaahwdhpcgaiduvqxexyhitdmlfriudwgwmeryqweqfkkfaidkddmmzu', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1074, 19, 44.494301281373104, 11.35136604309082, 'bike', DEFAULT, '2020-04-20 19:57:10.913222', 'cavpczeyegakpxirjrnbrfrirideaduhpckzbfuzkxnqcrpcbafsebkglwlujwotzikwmiyijbkykfeizjcrhuolwkecrfpsyieldflgfwwgiurhooqwgdhxamgepqyz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1075, 19, 44.49442373076525, 11.348104476928711, 'bike', DEFAULT, '2020-04-20 19:57:25.153868', 'cavpczeyegakpxirjrnbrfrirideaduhpckzbfuzkxnqcrpcbafsebkglwlujwotzikwmiyijbkykfeizjcrhuolwkecrfpsyieldflgfwwgiurhooqwgdhxamgepqyz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1076, 19, 44.49371964324917, 11.34763240814209, 'bike', DEFAULT, '2020-04-20 19:57:39.886542', 'cavpczeyegakpxirjrnbrfrirideaduhpckzbfuzkxnqcrpcbafsebkglwlujwotzikwmiyijbkykfeizjcrhuolwkecrfpsyieldflgfwwgiurhooqwgdhxamgepqyz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1077, 19, 44.49427066898489, 11.345357894897461, 'bike', DEFAULT, '2020-04-20 19:58:40.955089', 'cavpczeyegakpxirjrnbrfrirideaduhpckzbfuzkxnqcrpcbafsebkglwlujwotzikwmiyijbkykfeizjcrhuolwkecrfpsyieldflgfwwgiurhooqwgdhxamgepqyz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1078, 19, 44.49577065710941, 11.345744132995605, 'bike', DEFAULT, '2020-04-20 19:59:42.207787', 'cavpczeyegakpxirjrnbrfrirideaduhpckzbfuzkxnqcrpcbafsebkglwlujwotzikwmiyijbkykfeizjcrhuolwkecrfpsyieldflgfwwgiurhooqwgdhxamgepqyz', NULL, 5);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1079, 19, 44.49595432647321, 11.344585418701172, 'bike', DEFAULT, '2020-04-20 20:00:52.146643', 'cavpczeyegakpxirjrnbrfrirideaduhpckzbfuzkxnqcrpcbafsebkglwlujwotzikwmiyijbkykfeizjcrhuolwkecrfpsyieldflgfwwgiurhooqwgdhxamgepqyz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1080, 19, 44.49629105213761, 11.344413757324219, 'bike', DEFAULT, '2020-04-20 20:02:06.655704', 'cavpczeyegakpxirjrnbrfrirideaduhpckzbfuzkxnqcrpcbafsebkglwlujwotzikwmiyijbkykfeizjcrhuolwkecrfpsyieldflgfwwgiurhooqwgdhxamgepqyz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1081, 19, 44.49650533109345, 11.341795921325684, 'bike', DEFAULT, '2020-04-20 20:03:33.088811', 'cavpczeyegakpxirjrnbrfrirideaduhpckzbfuzkxnqcrpcbafsebkglwlujwotzikwmiyijbkykfeizjcrhuolwkecrfpsyieldflgfwwgiurhooqwgdhxamgepqyz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1082, 19, 44.49681144252163, 11.339778900146484, 'bike', DEFAULT, '2020-04-20 20:04:50.437452', 'cavpczeyegakpxirjrnbrfrirideaduhpckzbfuzkxnqcrpcbafsebkglwlujwotzikwmiyijbkykfeizjcrhuolwkecrfpsyieldflgfwwgiurhooqwgdhxamgepqyz', NULL, 1);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1083, 19, 44.49699510860722, 11.33913516998291, 'bike', DEFAULT, '2020-04-20 20:06:04.391565', 'cavpczeyegakpxirjrnbrfrirideaduhpckzbfuzkxnqcrpcbafsebkglwlujwotzikwmiyijbkykfeizjcrhuolwkecrfpsyieldflgfwwgiurhooqwgdhxamgepqyz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1084, 19, 44.49926027609643, 11.339778900146484, 'bike', DEFAULT, '2020-04-20 20:06:56.22654', 'cavpczeyegakpxirjrnbrfrirideaduhpckzbfuzkxnqcrpcbafsebkglwlujwotzikwmiyijbkykfeizjcrhuolwkecrfpsyieldflgfwwgiurhooqwgdhxamgepqyz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1085, 20, 44.491760398466674, 11.357331275939941, 'bike', DEFAULT, '2020-04-20 20:10:17.250663', 'btkjkzlpumdbqbbmmaobgmwimpxgqjsctzqnonddwaxswysysatgfjsvhjyzbplhelcajdshbvvtelrajnmabvzyjqzdoovduzblgovvvyfibxhbndxrmiyzpujtpzst', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1086, 20, 44.48860710068857, 11.357502937316895, 'bike', DEFAULT, '2020-04-20 20:11:30.927702', 'btkjkzlpumdbqbbmmaobgmwimpxgqjsctzqnonddwaxswysysatgfjsvhjyzbplhelcajdshbvvtelrajnmabvzyjqzdoovduzblgovvvyfibxhbndxrmiyzpujtpzst', NULL, 3);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1087, 20, 44.48820909953218, 11.356945037841797, 'bike', DEFAULT, '2020-04-20 20:11:52.970527', 'btkjkzlpumdbqbbmmaobgmwimpxgqjsctzqnonddwaxswysysatgfjsvhjyzbplhelcajdshbvvtelrajnmabvzyjqzdoovduzblgovvvyfibxhbndxrmiyzpujtpzst', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1088, 20, 44.48897448396096, 11.35484218597412, 'bike', DEFAULT, '2020-04-20 20:12:55.102861', 'btkjkzlpumdbqbbmmaobgmwimpxgqjsctzqnonddwaxswysysatgfjsvhjyzbplhelcajdshbvvtelrajnmabvzyjqzdoovduzblgovvvyfibxhbndxrmiyzpujtpzst', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1089, 20, 44.49154610207528, 11.356558799743652, 'bike', DEFAULT, '2020-04-20 20:13:58.971742', 'btkjkzlpumdbqbbmmaobgmwimpxgqjsctzqnonddwaxswysysatgfjsvhjyzbplhelcajdshbvvtelrajnmabvzyjqzdoovduzblgovvvyfibxhbndxrmiyzpujtpzst', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1090, 21, 44.490107234483794, 11.352567672729492, 'bike', DEFAULT, '2020-04-20 20:14:42.293856', 'eoxcygqnxlvbirymywwphmeuparjgjldhcgqksewydmlpswmkoxvihzrwjcnappbdhgknfkbqlauebxgzwsfjmhnjrhflwxmutzbrdyuegnthqjakaydtxxhiolaioou', NULL, 3);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1091, 21, 44.491423646640975, 11.353812217712402, 'bike', DEFAULT, '2020-04-20 20:15:20.712316', 'eoxcygqnxlvbirymywwphmeuparjgjldhcgqksewydmlpswmkoxvihzrwjcnappbdhgknfkbqlauebxgzwsfjmhnjrhflwxmutzbrdyuegnthqjakaydtxxhiolaioou', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1092, 21, 44.49105627879535, 11.354928016662598, 'bike', DEFAULT, '2020-04-20 20:16:09.402732', 'eoxcygqnxlvbirymywwphmeuparjgjldhcgqksewydmlpswmkoxvihzrwjcnappbdhgknfkbqlauebxgzwsfjmhnjrhflwxmutzbrdyuegnthqjakaydtxxhiolaioou', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1093, 22, 44.48686199854396, 11.35364055633545, 'bike', DEFAULT, '2020-04-20 20:16:42.382259', 'anwhyuxrwkgwdunhstipjmpsjirmufgtununrqustaywkhjeysljcynhotfqafugtxpltawbtusgaeskccscmjvrpxosgapjwtwuppghddahveyqfzjtbembnhtzxtfd', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1094, 22, 44.48836217722139, 11.354455947875977, 'bike', DEFAULT, '2020-04-20 20:17:33.262283', 'anwhyuxrwkgwdunhstipjmpsjirmufgtununrqustaywkhjeysljcynhotfqafugtxpltawbtusgaeskccscmjvrpxosgapjwtwuppghddahveyqfzjtbembnhtzxtfd', NULL, 3);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1095, 23, 44.48582103556305, 11.344456672668457, 'bike', DEFAULT, '2020-04-20 20:18:18.190883', 'buvuqfwtkmqbohhdaxiwhmiycivquxrdtygnmllpvhemssxgnkxspufywiurcngrojwbqfxxauzoltevhsgeumzggpywlxazwjpmmzzumgfomdezknkpenmohdhodbjv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1097, 23, 44.4881784839461, 11.348104476928711, 'bike', DEFAULT, '2020-04-20 20:20:30.145264', 'buvuqfwtkmqbohhdaxiwhmiycivquxrdtygnmllpvhemssxgnkxspufywiurcngrojwbqfxxauzoltevhsgeumzggpywlxazwjpmmzzumgfomdezknkpenmohdhodbjv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1098, 23, 44.49267880265395, 11.34638786315918, 'bike', DEFAULT, '2020-04-20 20:21:21.637793', 'buvuqfwtkmqbohhdaxiwhmiycivquxrdtygnmllpvhemssxgnkxspufywiurcngrojwbqfxxauzoltevhsgeumzggpywlxazwjpmmzzumgfomdezknkpenmohdhodbjv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1099, 24, 44.487749864054024, 11.344113349914549, 'bike', DEFAULT, '2020-04-20 20:36:29.372729', 'yilwyakixxryltiinxgbrhisrfthlxsfleoxyqwsijhkdlmvcibawhpgbbgcpweglesmkkxlcqzyggfqxheybyyibnlkpsssksottvcovsefakhpeodnshftvupzkvza', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1100, 24, 44.489096944537536, 11.342439651489258, 'bike', DEFAULT, '2020-04-20 20:37:40.708418', 'yilwyakixxryltiinxgbrhisrfthlxsfleoxyqwsijhkdlmvcibawhpgbbgcpweglesmkkxlcqzyggfqxheybyyibnlkpsssksottvcovsefakhpeodnshftvupzkvza', NULL, 4);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1101, 24, 44.49053583705292, 11.342782974243164, 'bike', DEFAULT, '2020-04-20 20:38:05.143165', 'yilwyakixxryltiinxgbrhisrfthlxsfleoxyqwsijhkdlmvcibawhpgbbgcpweglesmkkxlcqzyggfqxheybyyibnlkpsssksottvcovsefakhpeodnshftvupzkvza', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1102, 13, 44.49818892406229, 11.356472969055176, 'car', DEFAULT, '2020-04-20 22:23:26.474695', 'sijslmtilpzwomtwftyeninqbpmsromvvbgfxisybbfjaamfrvtpetfaagiutmdfalxjwsuyyirigahcqmmujfzsvnulmvgzcoeufdnbgldmfgipqzdivbbcrmznqpgl', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1103, 13, 44.503300626648304, 11.334671974182129, 'car', DEFAULT, '2020-04-20 22:24:34.904915', 'sijslmtilpzwomtwftyeninqbpmsromvvbgfxisybbfjaamfrvtpetfaagiutmdfalxjwsuyyirigahcqmmujfzsvnulmvgzcoeufdnbgldmfgipqzdivbbcrmznqpgl', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1104, 14, 44.48876017733329, 11.333470344543455, 'car', DEFAULT, '2020-04-20 22:25:24.252756', 'unxwnidrfsnwbqlmkwmgthuhwfomkbjgdgxbbtixrygkptieptmlahpmceinnltwnkmsmacftfrlwbzgeqteksfsqyybectqecrtxryroydrlclextoguygahcqcscdt', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1105, 14, 44.49001539066635, 11.334028244018555, 'car', DEFAULT, '2020-04-20 22:26:15.24661', 'unxwnidrfsnwbqlmkwmgthuhwfomkbjgdgxbbtixrygkptieptmlahpmceinnltwnkmsmacftfrlwbzgeqteksfsqyybectqecrtxryroydrlclextoguygahcqcscdt', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1106, 14, 44.49127057698653, 11.339993476867676, 'car', DEFAULT, '2020-04-20 22:27:11.924174', 'unxwnidrfsnwbqlmkwmgthuhwfomkbjgdgxbbtixrygkptieptmlahpmceinnltwnkmsmacftfrlwbzgeqteksfsqyybectqecrtxryroydrlclextoguygahcqcscdt', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1107, 14, 44.49127057698653, 11.341924667358398, 'car', DEFAULT, '2020-04-20 22:28:31.49695', 'unxwnidrfsnwbqlmkwmgthuhwfomkbjgdgxbbtixrygkptieptmlahpmceinnltwnkmsmacftfrlwbzgeqteksfsqyybectqecrtxryroydrlclextoguygahcqcscdt', NULL, 6);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1108, 14, 44.48885202312726, 11.340465545654297, 'car', DEFAULT, '2020-04-20 22:29:39.010252', 'unxwnidrfsnwbqlmkwmgthuhwfomkbjgdgxbbtixrygkptieptmlahpmceinnltwnkmsmacftfrlwbzgeqteksfsqyybectqecrtxryroydrlclextoguygahcqcscdt', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1109, 14, 44.48793355867916, 11.345186233520508, 'car', DEFAULT, '2020-04-20 22:30:33.868031', 'unxwnidrfsnwbqlmkwmgthuhwfomkbjgdgxbbtixrygkptieptmlahpmceinnltwnkmsmacftfrlwbzgeqteksfsqyybectqecrtxryroydrlclextoguygahcqcscdt', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1110, 14, 44.48891325357624, 11.346173286437988, 'car', DEFAULT, '2020-04-20 22:31:24.393783', 'unxwnidrfsnwbqlmkwmgthuhwfomkbjgdgxbbtixrygkptieptmlahpmceinnltwnkmsmacftfrlwbzgeqteksfsqyybectqecrtxryroydrlclextoguygahcqcscdt', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1111, 14, 44.488882638359804, 11.34763240814209, 'car', DEFAULT, '2020-04-20 22:32:54.929089', 'unxwnidrfsnwbqlmkwmgthuhwfomkbjgdgxbbtixrygkptieptmlahpmceinnltwnkmsmacftfrlwbzgeqteksfsqyybectqecrtxryroydrlclextoguygahcqcscdt', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1112, 14, 44.48692323108195, 11.34814739227295, 'car', DEFAULT, '2020-04-20 22:33:47.775555', 'unxwnidrfsnwbqlmkwmgthuhwfomkbjgdgxbbtixrygkptieptmlahpmceinnltwnkmsmacftfrlwbzgeqteksfsqyybectqecrtxryroydrlclextoguygahcqcscdt', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1114, 14, 44.48698446355571, 11.34861946105957, 'car', DEFAULT, '2020-04-20 22:38:12.102064', 'unxwnidrfsnwbqlmkwmgthuhwfomkbjgdgxbbtixrygkptieptmlahpmceinnltwnkmsmacftfrlwbzgeqteksfsqyybectqecrtxryroydrlclextoguygahcqcscdt', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1115, 14, 44.49004600528823, 11.350293159484863, 'car', DEFAULT, '2020-04-20 22:39:12.375743', 'unxwnidrfsnwbqlmkwmgthuhwfomkbjgdgxbbtixrygkptieptmlahpmceinnltwnkmsmacftfrlwbzgeqteksfsqyybectqecrtxryroydrlclextoguygahcqcscdt', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1116, 15, 44.4921889888872, 11.35162353515625, 'car', DEFAULT, '2020-04-20 22:40:45.738238', 'gxpinbrpvhikjtxhduotkodxzfkglfzpuvvdrxvqclaezglyuskkmbemcjankumnydkijztstmrjxkcqguemabrmdoftcrfoiwkkwhefvgkribpbltdbevxisiazljxc', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1117, 15, 44.494638016582854, 11.351881027221678, 'car', DEFAULT, '2020-04-20 22:41:52.864543', 'gxpinbrpvhikjtxhduotkodxzfkglfzpuvvdrxvqclaezglyuskkmbemcjankumnydkijztstmrjxkcqguemabrmdoftcrfoiwkkwhefvgkribpbltdbevxisiazljxc', NULL, 4);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1118, 15, 44.49613799525846, 11.35037899017334, 'car', DEFAULT, '2020-04-20 22:42:54.537097', 'gxpinbrpvhikjtxhduotkodxzfkglfzpuvvdrxvqclaezglyuskkmbemcjankumnydkijztstmrjxkcqguemabrmdoftcrfoiwkkwhefvgkribpbltdbevxisiazljxc', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1119, 15, 44.49730121746426, 11.348748207092285, 'car', DEFAULT, '2020-04-20 22:44:05.185772', 'gxpinbrpvhikjtxhduotkodxzfkglfzpuvvdrxvqclaezglyuskkmbemcjankumnydkijztstmrjxkcqguemabrmdoftcrfoiwkkwhefvgkribpbltdbevxisiazljxc', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1120, 15, 44.498678687434754, 11.349306106567383, 'car', DEFAULT, '2020-04-20 22:45:50.110054', 'gxpinbrpvhikjtxhduotkodxzfkglfzpuvvdrxvqclaezglyuskkmbemcjankumnydkijztstmrjxkcqguemabrmdoftcrfoiwkkwhefvgkribpbltdbevxisiazljxc', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1121, 16, 44.49001539066635, 11.357760429382322, 'car', DEFAULT, '2020-04-20 22:46:35.634251', 'ufdljwivijrvphogwqfqhqzlmhaceiyybxkxrhutwcjfznankvnyfbjhltmpkouhsgadkrbcjakfwtonjkidjsbbyfxlqlstwacklgftssviecwncrwifzhwwrrjbujm', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1122, 16, 44.48848463908355, 11.35711669921875, 'car', DEFAULT, '2020-04-20 22:46:46.34309', 'ufdljwivijrvphogwqfqhqzlmhaceiyybxkxrhutwcjfznankvnyfbjhltmpkouhsgadkrbcjakfwtonjkidjsbbyfxlqlstwacklgftssviecwncrwifzhwwrrjbujm', NULL, 5);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1123, 16, 44.4881784839461, 11.356902122497559, 'car', DEFAULT, '2020-04-20 22:47:25.590761', 'ufdljwivijrvphogwqfqhqzlmhaceiyybxkxrhutwcjfznankvnyfbjhltmpkouhsgadkrbcjakfwtonjkidjsbbyfxlqlstwacklgftssviecwncrwifzhwwrrjbujm', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1124, 16, 44.4906276800508, 11.350679397583008, 'car', DEFAULT, '2020-04-20 22:48:13.948619', 'ufdljwivijrvphogwqfqhqzlmhaceiyybxkxrhutwcjfznankvnyfbjhltmpkouhsgadkrbcjakfwtonjkidjsbbyfxlqlstwacklgftssviecwncrwifzhwwrrjbujm', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1125, 16, 44.491515488240836, 11.351280212402344, 'car', DEFAULT, '2020-04-20 22:50:56.31675', 'ufdljwivijrvphogwqfqhqzlmhaceiyybxkxrhutwcjfznankvnyfbjhltmpkouhsgadkrbcjakfwtonjkidjsbbyfxlqlstwacklgftssviecwncrwifzhwwrrjbujm', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1126, 17, 44.49552576372451, 11.342954635620117, 'car', DEFAULT, '2020-04-20 22:51:43.451594', 'ocksmwhtlcumdqnatnbixvmdntmvunavbzemgyepcgfkepjalqnthsegwnycxlzkqpwstvgzappwsungujictbngaoycvcfzasydxotsptpvqiexonrnysafpsesykpw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1127, 17, 44.49169917100662, 11.341795921325684, 'car', DEFAULT, '2020-04-20 22:52:29.63252', 'ocksmwhtlcumdqnatnbixvmdntmvunavbzemgyepcgfkepjalqnthsegwnycxlzkqpwstvgzappwsungujictbngaoycvcfzasydxotsptpvqiexonrnysafpsesykpw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1128, 17, 44.491760398466674, 11.341967582702637, 'car', DEFAULT, '2020-04-20 22:53:11.046097', 'ocksmwhtlcumdqnatnbixvmdntmvunavbzemgyepcgfkepjalqnthsegwnycxlzkqpwstvgzappwsungujictbngaoycvcfzasydxotsptpvqiexonrnysafpsesykpw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1129, 17, 44.491760398466674, 11.34286880493164, 'car', DEFAULT, '2020-04-20 22:53:54.750373', 'ocksmwhtlcumdqnatnbixvmdntmvunavbzemgyepcgfkepjalqnthsegwnycxlzkqpwstvgzappwsungujictbngaoycvcfzasydxotsptpvqiexonrnysafpsesykpw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1130, 17, 44.492709415877755, 11.3433837890625, 'car', DEFAULT, '2020-04-20 22:54:37.154908', 'ocksmwhtlcumdqnatnbixvmdntmvunavbzemgyepcgfkepjalqnthsegwnycxlzkqpwstvgzappwsungujictbngaoycvcfzasydxotsptpvqiexonrnysafpsesykpw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1131, 17, 44.492403282916335, 11.345057487487791, 'car', DEFAULT, '2020-04-20 22:55:43.36743', 'ocksmwhtlcumdqnatnbixvmdntmvunavbzemgyepcgfkepjalqnthsegwnycxlzkqpwstvgzappwsungujictbngaoycvcfzasydxotsptpvqiexonrnysafpsesykpw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1132, 17, 44.493107386325235, 11.3454008102417, 'car', DEFAULT, '2020-04-20 22:56:30.584051', 'ocksmwhtlcumdqnatnbixvmdntmvunavbzemgyepcgfkepjalqnthsegwnycxlzkqpwstvgzappwsungujictbngaoycvcfzasydxotsptpvqiexonrnysafpsesykpw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1133, 17, 44.49298493416914, 11.346473693847656, 'car', DEFAULT, '2020-04-20 22:57:46.60868', 'ocksmwhtlcumdqnatnbixvmdntmvunavbzemgyepcgfkepjalqnthsegwnycxlzkqpwstvgzappwsungujictbngaoycvcfzasydxotsptpvqiexonrnysafpsesykpw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1134, 17, 44.493780868588026, 11.34763240814209, 'car', DEFAULT, '2020-04-20 22:59:27.707124', 'ocksmwhtlcumdqnatnbixvmdntmvunavbzemgyepcgfkepjalqnthsegwnycxlzkqpwstvgzappwsungujictbngaoycvcfzasydxotsptpvqiexonrnysafpsesykpw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1135, 17, 44.493107386325235, 11.349649429321289, 'car', DEFAULT, '2020-04-20 23:01:18.014398', 'ocksmwhtlcumdqnatnbixvmdntmvunavbzemgyepcgfkepjalqnthsegwnycxlzkqpwstvgzappwsungujictbngaoycvcfzasydxotsptpvqiexonrnysafpsesykpw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1136, 17, 44.493780868588026, 11.349821090698242, 'car', DEFAULT, '2020-04-20 23:01:45.590058', 'ocksmwhtlcumdqnatnbixvmdntmvunavbzemgyepcgfkepjalqnthsegwnycxlzkqpwstvgzappwsungujictbngaoycvcfzasydxotsptpvqiexonrnysafpsesykpw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1137, 17, 44.494913525762726, 11.349949836730955, 'car', DEFAULT, '2020-04-20 23:02:07.517924', 'ocksmwhtlcumdqnatnbixvmdntmvunavbzemgyepcgfkepjalqnthsegwnycxlzkqpwstvgzappwsungujictbngaoycvcfzasydxotsptpvqiexonrnysafpsesykpw', NULL, 4);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1138, 18, 44.50216813238757, 11.333384513854979, 'car', DEFAULT, '2020-04-20 23:02:47.478423', 'nmsgvcyskaqcadsahqhtgfrkqblwkgwqjrntuzzmzkbugrxnmawvnzjhdbuifwthyufwcboxfgstuuuuspdkwxswlkvzldhdufnduazzdvqwfywrgjiieypkcdzhnpxs', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1139, 18, 44.49846441646551, 11.33565902709961, 'car', DEFAULT, '2020-04-20 23:04:42.063567', 'nmsgvcyskaqcadsahqhtgfrkqblwkgwqjrntuzzmzkbugrxnmawvnzjhdbuifwthyufwcboxfgstuuuuspdkwxswlkvzldhdufnduazzdvqwfywrgjiieypkcdzhnpxs', NULL, 8);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1140, 18, 44.498250144708834, 11.334028244018555, 'car', DEFAULT, '2020-04-20 23:06:01.403253', 'nmsgvcyskaqcadsahqhtgfrkqblwkgwqjrntuzzmzkbugrxnmawvnzjhdbuifwthyufwcboxfgstuuuuspdkwxswlkvzldhdufnduazzdvqwfywrgjiieypkcdzhnpxs', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1141, 18, 44.496933886642964, 11.334071159362793, 'car', DEFAULT, '2020-04-20 23:07:32.86863', 'nmsgvcyskaqcadsahqhtgfrkqblwkgwqjrntuzzmzkbugrxnmawvnzjhdbuifwthyufwcboxfgstuuuuspdkwxswlkvzldhdufnduazzdvqwfywrgjiieypkcdzhnpxs', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1142, 18, 44.49595432647321, 11.334757804870605, 'car', DEFAULT, '2020-04-20 23:09:20.080686', 'nmsgvcyskaqcadsahqhtgfrkqblwkgwqjrntuzzmzkbugrxnmawvnzjhdbuifwthyufwcboxfgstuuuuspdkwxswlkvzldhdufnduazzdvqwfywrgjiieypkcdzhnpxs', NULL, 3);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1143, 18, 44.493903319072906, 11.334242820739746, 'car', DEFAULT, '2020-04-20 23:10:43.929013', 'nmsgvcyskaqcadsahqhtgfrkqblwkgwqjrntuzzmzkbugrxnmawvnzjhdbuifwthyufwcboxfgstuuuuspdkwxswlkvzldhdufnduazzdvqwfywrgjiieypkcdzhnpxs', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1144, 19, 44.49402576930068, 11.356730461120605, 'car', DEFAULT, '2020-04-20 23:11:46.455789', 'pmdsjzgpscmcpszrlqofplbxyvwfcxnescatlxzvlortrupvuwtgevshqcqrwvoyrqjccvlqepfezftoxawerdjpgjnyzjcuqcuxuoajcltqvqjbkrhxybtdboppybpb', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1145, 19, 44.49408699431814, 11.353168487548828, 'car', DEFAULT, '2020-04-20 23:12:55.470575', 'pmdsjzgpscmcpszrlqofplbxyvwfcxnescatlxzvlortrupvuwtgevshqcqrwvoyrqjccvlqepfezftoxawerdjpgjnyzjcuqcuxuoajcltqvqjbkrhxybtdboppybpb', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1146, 19, 44.49561759886438, 11.353554725646973, 'car', DEFAULT, '2020-04-20 23:13:35.536777', 'pmdsjzgpscmcpszrlqofplbxyvwfcxnescatlxzvlortrupvuwtgevshqcqrwvoyrqjccvlqepfezftoxawerdjpgjnyzjcuqcuxuoajcltqvqjbkrhxybtdboppybpb', NULL, 4);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1147, 19, 44.49681144252163, 11.354455947875977, 'car', DEFAULT, '2020-04-20 23:14:48.341233', 'pmdsjzgpscmcpszrlqofplbxyvwfcxnescatlxzvlortrupvuwtgevshqcqrwvoyrqjccvlqepfezftoxawerdjpgjnyzjcuqcuxuoajcltqvqjbkrhxybtdboppybpb', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1148, 19, 44.496321663465224, 11.356215476989746, 'car', DEFAULT, '2020-04-20 23:15:46.397486', 'pmdsjzgpscmcpszrlqofplbxyvwfcxnescatlxzvlortrupvuwtgevshqcqrwvoyrqjccvlqepfezftoxawerdjpgjnyzjcuqcuxuoajcltqvqjbkrhxybtdboppybpb', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1149, 19, 44.49910722701106, 11.355915069580078, 'car', DEFAULT, '2020-04-20 23:16:34.747848', 'pmdsjzgpscmcpszrlqofplbxyvwfcxnescatlxzvlortrupvuwtgevshqcqrwvoyrqjccvlqepfezftoxawerdjpgjnyzjcuqcuxuoajcltqvqjbkrhxybtdboppybpb', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1150, 20, 44.49981124947734, 11.35037899017334, 'car', DEFAULT, '2020-04-20 23:17:19.870463', 'gzamawojswgqsaaxtpzxseediczfrrzsbwapobhgyasnxbpndtemkopyifvbkzprjgbabvdyzqlclteyogsfhfssfzcnzasuqdwvrgxjunzksvjibocywbpdewthpwsw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1151, 20, 44.50235178159998, 11.3399076461792, 'car', DEFAULT, '2020-04-20 23:18:10.77588', 'gzamawojswgqsaaxtpzxseediczfrrzsbwapobhgyasnxbpndtemkopyifvbkzprjgbabvdyzqlclteyogsfhfssfzcnzasuqdwvrgxjunzksvjibocywbpdewthpwsw', NULL, 1);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1152, 20, 44.50455552702557, 11.340937614440918, 'car', DEFAULT, '2020-04-20 23:18:46.815172', 'gzamawojswgqsaaxtpzxseediczfrrzsbwapobhgyasnxbpndtemkopyifvbkzprjgbabvdyzqlclteyogsfhfssfzcnzasuqdwvrgxjunzksvjibocywbpdewthpwsw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1153, 21, 44.49696449763314, 11.327762603759766, 'car', DEFAULT, '2020-04-20 23:19:30.604719', 'tehkvcktwkcpoywisgrwrfedlakbtbyqljlprjwybygopmvnjxivlfbndvtlchwsuywboknkwdlelpopvcfefgjtrozaqpdflrwkohaekwbgzdpblvgkbxthadwgtmyg', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1154, 21, 44.497852209357376, 11.33089542388916, 'car', DEFAULT, '2020-04-20 23:20:09.771955', 'tehkvcktwkcpoywisgrwrfedlakbtbyqljlprjwybygopmvnjxivlfbndvtlchwsuywboknkwdlelpopvcfefgjtrozaqpdflrwkohaekwbgzdpblvgkbxthadwgtmyg', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1155, 21, 44.49886234763886, 11.332569122314453, 'car', DEFAULT, '2020-04-20 23:21:55.947872', 'tehkvcktwkcpoywisgrwrfedlakbtbyqljlprjwybygopmvnjxivlfbndvtlchwsuywboknkwdlelpopvcfefgjtrozaqpdflrwkohaekwbgzdpblvgkbxthadwgtmyg', NULL, 8);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1156, 21, 44.498219534393606, 11.335015296936035, 'car', DEFAULT, '2020-04-20 23:22:47.949871', 'tehkvcktwkcpoywisgrwrfedlakbtbyqljlprjwybygopmvnjxivlfbndvtlchwsuywboknkwdlelpopvcfefgjtrozaqpdflrwkohaekwbgzdpblvgkbxthadwgtmyg', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1157, 21, 44.49892356757832, 11.338319778442381, 'car', DEFAULT, '2020-04-20 23:23:38.92523', 'tehkvcktwkcpoywisgrwrfedlakbtbyqljlprjwybygopmvnjxivlfbndvtlchwsuywboknkwdlelpopvcfefgjtrozaqpdflrwkohaekwbgzdpblvgkbxthadwgtmyg', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1164, 22, 44.49681144252163, 11.34707450866699, 'car', DEFAULT, '2020-04-20 23:36:19.417865', 'lrcnuehydfkqmabwfpwcewlrtpevwvapfpxmpwqzhtdnpvbewqhfrisewqvsqyhfdrgfrudlizhnyaobnxrdnfpukozfpscjiqxxjatrfiwwyydnftesakbvqrmrrupq', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1163, 22, 44.49503597386932, 11.346302032470703, 'car', DEFAULT, '2020-04-20 23:35:24.291681', 'lrcnuehydfkqmabwfpwcewlrtpevwvapfpxmpwqzhtdnpvbewqhfrisewqvsqyhfdrgfrudlizhnyaobnxrdnfpukozfpscjiqxxjatrfiwwyydnftesakbvqrmrrupq', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1165, 22, 44.49754610339286, 11.344799995422363, 'car', DEFAULT, '2020-04-20 23:36:49.816553', 'lrcnuehydfkqmabwfpwcewlrtpevwvapfpxmpwqzhtdnpvbewqhfrisewqvsqyhfdrgfrudlizhnyaobnxrdnfpukozfpscjiqxxjatrfiwwyydnftesakbvqrmrrupq', NULL, 2);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1166, 22, 44.500943789520534, 11.346302032470703, 'car', DEFAULT, '2020-04-20 23:37:18.505791', 'lrcnuehydfkqmabwfpwcewlrtpevwvapfpxmpwqzhtdnpvbewqhfrisewqvsqyhfdrgfrudlizhnyaobnxrdnfpukozfpscjiqxxjatrfiwwyydnftesakbvqrmrrupq', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1167, 22, 44.50268847032027, 11.33763313293457, 'car', DEFAULT, '2020-04-20 23:37:52.92155', 'lrcnuehydfkqmabwfpwcewlrtpevwvapfpxmpwqzhtdnpvbewqhfrisewqvsqyhfdrgfrudlizhnyaobnxrdnfpukozfpscjiqxxjatrfiwwyydnftesakbvqrmrrupq', NULL, 1);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1168, 22, 44.50513705706506, 11.338448524475098, 'car', DEFAULT, '2020-04-20 23:38:21.686111', 'lrcnuehydfkqmabwfpwcewlrtpevwvapfpxmpwqzhtdnpvbewqhfrisewqvsqyhfdrgfrudlizhnyaobnxrdnfpukozfpscjiqxxjatrfiwwyydnftesakbvqrmrrupq', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1169, 23, 44.50069891786176, 11.353168487548828, 'car', DEFAULT, '2020-04-20 23:39:15.215238', 'qzrdvqrduepvhmgscnrxkmxdenlmzdonpdxlpokjofedpddjejbhlwrakcbnobrituloelyvhdiedaidlomynnwbwjqomnetdccjovbgibfqucfslouxpjwslqjmczlq', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1170, 23, 44.49760732471434, 11.350207328796387, 'car', DEFAULT, '2020-04-20 23:39:55.438522', 'qzrdvqrduepvhmgscnrxkmxdenlmzdonpdxlpokjofedpddjejbhlwrakcbnobrituloelyvhdiedaidlomynnwbwjqomnetdccjovbgibfqucfslouxpjwslqjmczlq', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1171, 23, 44.49482168951406, 11.350464820861816, 'car', DEFAULT, '2020-04-20 23:40:19.125418', 'qzrdvqrduepvhmgscnrxkmxdenlmzdonpdxlpokjofedpddjejbhlwrakcbnobrituloelyvhdiedaidlomynnwbwjqomnetdccjovbgibfqucfslouxpjwslqjmczlq', NULL, 4);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1172, 24, 44.50076013587287, 11.349520683288574, 'car', DEFAULT, '2020-04-20 23:40:54.252634', 'pngmxgrzeekjtgjefvcmfzbzbudwqcalkuftjdlnlkfbimgfifupppvedpnbpfusjupofgcrabvpvmnlituljepyruagvmudromjiwuorgskyevksbirdvyftdxfexrv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1173, 24, 44.497974651293234, 11.347589492797852, 'car', DEFAULT, '2020-04-20 23:41:43.568442', 'pngmxgrzeekjtgjefvcmfzbzbudwqcalkuftjdlnlkfbimgfifupppvedpnbpfusjupofgcrabvpvmnlituljepyruagvmudromjiwuorgskyevksbirdvyftdxfexrv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1174, 24, 44.49907661714579, 11.343812942504883, 'car', DEFAULT, '2020-04-20 23:42:26.781742', 'pngmxgrzeekjtgjefvcmfzbzbudwqcalkuftjdlnlkfbimgfifupppvedpnbpfusjupofgcrabvpvmnlituljepyruagvmudromjiwuorgskyevksbirdvyftdxfexrv', NULL, 2);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1175, 24, 44.49886234763886, 11.341795921325684, 'car', DEFAULT, '2020-04-20 23:43:56.936156', 'pngmxgrzeekjtgjefvcmfzbzbudwqcalkuftjdlnlkfbimgfifupppvedpnbpfusjupofgcrabvpvmnlituljepyruagvmudromjiwuorgskyevksbirdvyftdxfexrv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1176, 24, 44.49886234763886, 11.339735984802246, 'car', DEFAULT, '2020-04-20 23:45:04.558647', 'pngmxgrzeekjtgjefvcmfzbzbudwqcalkuftjdlnlkfbimgfifupppvedpnbpfusjupofgcrabvpvmnlituljepyruagvmudromjiwuorgskyevksbirdvyftdxfexrv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1177, 24, 44.49690327563674, 11.339349746704102, 'car', DEFAULT, '2020-04-20 23:45:42.173065', 'pngmxgrzeekjtgjefvcmfzbzbudwqcalkuftjdlnlkfbimgfifupppvedpnbpfusjupofgcrabvpvmnlituljepyruagvmudromjiwuorgskyevksbirdvyftdxfexrv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1178, 24, 44.49717877411428, 11.338319778442381, 'car', DEFAULT, '2020-04-20 23:46:10.255296', 'pngmxgrzeekjtgjefvcmfzbzbudwqcalkuftjdlnlkfbimgfifupppvedpnbpfusjupofgcrabvpvmnlituljepyruagvmudromjiwuorgskyevksbirdvyftdxfexrv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1179, 24, 44.495464540217576, 11.337676048278809, 'car', DEFAULT, '2020-04-20 23:47:02.607388', 'pngmxgrzeekjtgjefvcmfzbzbudwqcalkuftjdlnlkfbimgfifupppvedpnbpfusjupofgcrabvpvmnlituljepyruagvmudromjiwuorgskyevksbirdvyftdxfexrv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1180, 24, 44.49264818941406, 11.33690357208252, 'car', DEFAULT, '2020-04-20 23:48:04.438178', 'pngmxgrzeekjtgjefvcmfzbzbudwqcalkuftjdlnlkfbimgfifupppvedpnbpfusjupofgcrabvpvmnlituljepyruagvmudromjiwuorgskyevksbirdvyftdxfexrv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1181, 24, 44.49169917100662, 11.338577270507812, 'car', DEFAULT, '2020-04-20 23:49:37.617337', 'pngmxgrzeekjtgjefvcmfzbzbudwqcalkuftjdlnlkfbimgfifupppvedpnbpfusjupofgcrabvpvmnlituljepyruagvmudromjiwuorgskyevksbirdvyftdxfexrv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1182, 24, 44.49123996300742, 11.337547302246094, 'car', DEFAULT, '2020-04-20 23:51:28.284614', 'pngmxgrzeekjtgjefvcmfzbzbudwqcalkuftjdlnlkfbimgfifupppvedpnbpfusjupofgcrabvpvmnlituljepyruagvmudromjiwuorgskyevksbirdvyftdxfexrv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1183, 24, 44.491882853193914, 11.335959434509277, 'car', DEFAULT, '2020-04-20 23:51:52.204103', 'pngmxgrzeekjtgjefvcmfzbzbudwqcalkuftjdlnlkfbimgfifupppvedpnbpfusjupofgcrabvpvmnlituljepyruagvmudromjiwuorgskyevksbirdvyftdxfexrv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1184, 24, 44.49274002908554, 11.330466270446776, 'car', DEFAULT, '2020-04-20 23:52:31.16294', 'pngmxgrzeekjtgjefvcmfzbzbudwqcalkuftjdlnlkfbimgfifupppvedpnbpfusjupofgcrabvpvmnlituljepyruagvmudromjiwuorgskyevksbirdvyftdxfexrv', NULL, 9);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1185, 25, 44.50424945625363, 11.347846984863281, 'car', DEFAULT, '2020-04-20 23:53:06.046893', 'bpyxszdwvbhottcpebmzmowknabdieidlkblkvfiswaxttuzicrsqzqmyggxqxlofbpzubblnkxaultcdiriptebgegunzucvbpoppqrhuifctmhethzqileqcwgselz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1186, 25, 44.505443123176825, 11.341452598571777, 'car', DEFAULT, '2020-04-20 23:53:45.200079', 'bpyxszdwvbhottcpebmzmowknabdieidlkblkvfiswaxttuzicrsqzqmyggxqxlofbpzubblnkxaultcdiriptebgegunzucvbpoppqrhuifctmhethzqileqcwgselz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1187, 25, 44.5048003824861, 11.337847709655762, 'car', DEFAULT, '2020-04-20 23:55:10.355943', 'bpyxszdwvbhottcpebmzmowknabdieidlkblkvfiswaxttuzicrsqzqmyggxqxlofbpzubblnkxaultcdiriptebgegunzucvbpoppqrhuifctmhethzqileqcwgselz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1188, 25, 44.502076307564394, 11.339993476867676, 'car', DEFAULT, '2020-04-20 23:55:22.184591', 'bpyxszdwvbhottcpebmzmowknabdieidlkblkvfiswaxttuzicrsqzqmyggxqxlofbpzubblnkxaultcdiriptebgegunzucvbpoppqrhuifctmhethzqileqcwgselz', NULL, 1);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1189, 25, 44.49766854597149, 11.337847709655762, 'car', DEFAULT, '2020-04-20 23:56:12.754955', 'bpyxszdwvbhottcpebmzmowknabdieidlkblkvfiswaxttuzicrsqzqmyggxqxlofbpzubblnkxaultcdiriptebgegunzucvbpoppqrhuifctmhethzqileqcwgselz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1191, 13, 44.498250144708834, 11.356344223022461, 'walk', DEFAULT, '2020-04-21 10:47:01.502255', 'xzoxfnrbykknpalpqlzgqtfcqthdzopjgzgnjufqmlcjpjufhewalesfvhmzsbmbenohcbdluzwjvjdoboclbivyauvtimtrnqcisrbvatrhxotokuhjlaybwvtbuuuz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1192, 13, 44.49558698716716, 11.348791122436523, 'walk', DEFAULT, '2020-04-21 10:48:12.506061', 'xzoxfnrbykknpalpqlzgqtfcqthdzopjgzgnjufqmlcjpjufhewalesfvhmzsbmbenohcbdluzwjvjdoboclbivyauvtimtrnqcisrbvatrhxotokuhjlaybwvtbuuuz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1193, 13, 44.49316861230689, 11.349206106567383, 'walk', DEFAULT, '2020-04-21 10:49:09.523064', 'xzoxfnrbykknpalpqlzgqtfcqthdzopjgzgnjufqmlcjpjufhewalesfvhmzsbmbenohcbdluzwjvjdoboclbivyauvtimtrnqcisrbvatrhxotokuhjlaybwvtbuuuz', NULL, 3);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1194, 13, 44.4923726695318, 11.349177360534668, 'walk', DEFAULT, '2020-04-21 10:50:50.980881', 'xzoxfnrbykknpalpqlzgqtfcqthdzopjgzgnjufqmlcjpjufhewalesfvhmzsbmbenohcbdluzwjvjdoboclbivyauvtimtrnqcisrbvatrhxotokuhjlaybwvtbuuuz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1195, 14, 44.49402576930068, 11.356902122497559, 'walk', DEFAULT, '2020-04-21 10:51:38.470882', 'mhsxtyafapbezecexyjxupjuzfypwstmvnpumrxjycbfhfpqgkatzwrmjfmxnqbzayjbjfooesidlyfasnmflodkfhruoctswvfmyiivzycecgepfjpactdywjdwofza', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1196, 14, 44.490107234483794, 11.357502937316895, 'walk', DEFAULT, '2020-04-21 10:52:23.577921', 'mhsxtyafapbezecexyjxupjuzfypwstmvnpumrxjycbfhfpqgkatzwrmjfmxnqbzayjbjfooesidlyfasnmflodkfhruoctswvfmyiivzycecgepfjpactdywjdwofza', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1197, 14, 44.490199078156614, 11.35681629180908, 'walk', DEFAULT, '2020-04-21 10:53:02.892813', 'mhsxtyafapbezecexyjxupjuzfypwstmvnpumrxjycbfhfpqgkatzwrmjfmxnqbzayjbjfooesidlyfasnmflodkfhruoctswvfmyiivzycecgepfjpactdywjdwofza', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1198, 14, 44.489341864919325, 11.356472969055176, 'walk', DEFAULT, '2020-04-21 10:54:08.639524', 'mhsxtyafapbezecexyjxupjuzfypwstmvnpumrxjycbfhfpqgkatzwrmjfmxnqbzayjbjfooesidlyfasnmflodkfhruoctswvfmyiivzycecgepfjpactdywjdwofza', NULL, 10);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1199, 14, 44.48851525450889, 11.357073783874512, 'walk', DEFAULT, '2020-04-21 10:55:01.853959', 'mhsxtyafapbezecexyjxupjuzfypwstmvnpumrxjycbfhfpqgkatzwrmjfmxnqbzayjbjfooesidlyfasnmflodkfhruoctswvfmyiivzycecgepfjpactdywjdwofza', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1200, 14, 44.48814786834398, 11.356687545776367, 'walk', DEFAULT, '2020-04-21 10:56:03.330293', 'mhsxtyafapbezecexyjxupjuzfypwstmvnpumrxjycbfhfpqgkatzwrmjfmxnqbzayjbjfooesidlyfasnmflodkfhruoctswvfmyiivzycecgepfjpactdywjdwofza', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1201, 14, 44.4906276800508, 11.350765228271484, 'walk', DEFAULT, '2020-04-21 10:57:07.273751', 'mhsxtyafapbezecexyjxupjuzfypwstmvnpumrxjycbfhfpqgkatzwrmjfmxnqbzayjbjfooesidlyfasnmflodkfhruoctswvfmyiivzycecgepfjpactdywjdwofza', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1202, 15, 44.50112744258969, 11.344285011291504, 'walk', DEFAULT, '2020-04-21 10:57:49.481399', 'ivunuxebaidfwtfhkgrjqqwkgmoisrnvvtrfpdcjbrjribbmvsrbqfarcxcoggyudevzlpdvgzwnzyinixrvrlryuqdsbfsbcbiuxymnbnrtynfqrjpgeuxngoglmsas', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1203, 15, 44.50155596416797, 11.342225074768065, 'walk', DEFAULT, '2020-04-21 10:58:26.285126', 'ivunuxebaidfwtfhkgrjqqwkgmoisrnvvtrfpdcjbrjribbmvsrbqfarcxcoggyudevzlpdvgzwnzyinixrvrlryuqdsbfsbcbiuxymnbnrtynfqrjpgeuxngoglmsas', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1204, 15, 44.503025157096125, 11.342697143554688, 'walk', DEFAULT, '2020-04-21 10:59:02.754493', 'ivunuxebaidfwtfhkgrjqqwkgmoisrnvvtrfpdcjbrjribbmvsrbqfarcxcoggyudevzlpdvgzwnzyinixrvrlryuqdsbfsbcbiuxymnbnrtynfqrjpgeuxngoglmsas', NULL, 8);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1205, 15, 44.503545487379675, 11.340508460998535, 'walk', DEFAULT, '2020-04-21 11:00:02.121839', 'ivunuxebaidfwtfhkgrjqqwkgmoisrnvvtrfpdcjbrjribbmvsrbqfarcxcoggyudevzlpdvgzwnzyinixrvrlryuqdsbfsbcbiuxymnbnrtynfqrjpgeuxngoglmsas', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1206, 15, 44.50550433620632, 11.341495513916016, 'walk', DEFAULT, '2020-04-21 11:00:36.89728', 'ivunuxebaidfwtfhkgrjqqwkgmoisrnvvtrfpdcjbrjribbmvsrbqfarcxcoggyudevzlpdvgzwnzyinixrvrlryuqdsbfsbcbiuxymnbnrtynfqrjpgeuxngoglmsas', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1207, 15, 44.505657368498895, 11.33965015411377, 'walk', DEFAULT, '2020-04-21 11:01:23.438732', 'ivunuxebaidfwtfhkgrjqqwkgmoisrnvvtrfpdcjbrjribbmvsrbqfarcxcoggyudevzlpdvgzwnzyinixrvrlryuqdsbfsbcbiuxymnbnrtynfqrjpgeuxngoglmsas', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1208, 15, 44.50268847032027, 11.333298683166504, 'walk', DEFAULT, '2020-04-21 11:03:26.992023', 'ivunuxebaidfwtfhkgrjqqwkgmoisrnvvtrfpdcjbrjribbmvsrbqfarcxcoggyudevzlpdvgzwnzyinixrvrlryuqdsbfsbcbiuxymnbnrtynfqrjpgeuxngoglmsas', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1209, 16, 44.491423646640975, 11.34510040283203, 'walk', DEFAULT, '2020-04-21 11:04:03.276532', 'ufexpwponhirqdnmglkcwtcjijpcgwqniuimzspxrikuwcsantwmdfaxxxbojpsvyqzleeiixflkngykizxsxumfamteqtcfgrswajvzleprgmiwzvzhmkrdvnjyhgcr', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1210, 16, 44.49127057698653, 11.342911720275879, 'walk', DEFAULT, '2020-04-21 11:05:47.702422', 'ufexpwponhirqdnmglkcwtcjijpcgwqniuimzspxrikuwcsantwmdfaxxxbojpsvyqzleeiixflkngykizxsxumfamteqtcfgrswajvzleprgmiwzvzhmkrdvnjyhgcr', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1211, 16, 44.49267880265395, 11.343126296997069, 'walk', DEFAULT, '2020-04-21 11:06:15.211608', 'ufexpwponhirqdnmglkcwtcjijpcgwqniuimzspxrikuwcsantwmdfaxxxbojpsvyqzleeiixflkngykizxsxumfamteqtcfgrswajvzleprgmiwzvzhmkrdvnjyhgcr', NULL, 1);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1212, 17, 44.48646398548002, 11.339435577392578, 'walk', DEFAULT, '2020-04-21 11:06:51.127394', 'xqxylrtkwukynqkbxxqhnkozwnkwbmstqhsbkcavofbhncprmafmiwjvihmhmxtridcgvgnbgvnkjpnlvnioqajgggdexpbczzewaisssduleiruahmettxfochgnukx', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1213, 17, 44.48582103556305, 11.344413757324219, 'walk', DEFAULT, '2020-04-21 11:09:16.06701', 'xqxylrtkwukynqkbxxqhnkozwnkwbmstqhsbkcavofbhncprmafmiwjvihmhmxtridcgvgnbgvnkjpnlvnioqajgggdexpbczzewaisssduleiruahmettxfochgnukx', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1214, 17, 44.48707631214582, 11.34488582611084, 'walk', DEFAULT, '2020-04-21 11:09:57.184594', 'xqxylrtkwukynqkbxxqhnkozwnkwbmstqhsbkcavofbhncprmafmiwjvihmhmxtridcgvgnbgvnkjpnlvnioqajgggdexpbczzewaisssduleiruahmettxfochgnukx', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1215, 17, 44.48891325357624, 11.343040466308594, 'walk', DEFAULT, '2020-04-21 11:10:38.447457', 'xqxylrtkwukynqkbxxqhnkozwnkwbmstqhsbkcavofbhncprmafmiwjvihmhmxtridcgvgnbgvnkjpnlvnioqajgggdexpbczzewaisssduleiruahmettxfochgnukx', NULL, 9);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1216, 18, 44.49047460830729, 11.337289810180662, 'walk', DEFAULT, '2020-04-21 11:11:08.90561', 'xpgpdljnkecjlrvmtfdxvilgpmkwfjcgjqlipvfgbmddvmnqzdmsbjeqtdxiydvgxwlnuhqkzroidterrfyneexhgkxfwdkwkypqbamshudrwuqotobkqnpsnfzvpadf', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1217, 18, 44.49203592124142, 11.338105201721191, 'walk', DEFAULT, '2020-04-21 11:11:57.472134', 'xpgpdljnkecjlrvmtfdxvilgpmkwfjcgjqlipvfgbmddvmnqzdmsbjeqtdxiydvgxwlnuhqkzroidterrfyneexhgkxfwdkwkypqbamshudrwuqotobkqnpsnfzvpadf', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1218, 18, 44.49402576930068, 11.332054138183594, 'walk', DEFAULT, '2020-04-21 11:13:06.340386', 'xpgpdljnkecjlrvmtfdxvilgpmkwfjcgjqlipvfgbmddvmnqzdmsbjeqtdxiydvgxwlnuhqkzroidterrfyneexhgkxfwdkwkypqbamshudrwuqotobkqnpsnfzvpadf', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1219, 18, 44.49552576372451, 11.332783699035645, 'walk', DEFAULT, '2020-04-21 11:15:03.94357', 'xpgpdljnkecjlrvmtfdxvilgpmkwfjcgjqlipvfgbmddvmnqzdmsbjeqtdxiydvgxwlnuhqkzroidterrfyneexhgkxfwdkwkypqbamshudrwuqotobkqnpsnfzvpadf', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1220, 18, 44.49699510860722, 11.333470344543455, 'walk', DEFAULT, '2020-04-21 11:15:58.309045', 'xpgpdljnkecjlrvmtfdxvilgpmkwfjcgjqlipvfgbmddvmnqzdmsbjeqtdxiydvgxwlnuhqkzroidterrfyneexhgkxfwdkwkypqbamshudrwuqotobkqnpsnfzvpadf', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1221, 18, 44.498005261737006, 11.331195831298828, 'walk', DEFAULT, '2020-04-21 11:17:02.199935', 'xpgpdljnkecjlrvmtfdxvilgpmkwfjcgjqlipvfgbmddvmnqzdmsbjeqtdxiydvgxwlnuhqkzroidterrfyneexhgkxfwdkwkypqbamshudrwuqotobkqnpsnfzvpadf', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1222, 18, 44.498648077344505, 11.332526206970215, 'walk', DEFAULT, '2020-04-21 11:17:50.693641', 'xpgpdljnkecjlrvmtfdxvilgpmkwfjcgjqlipvfgbmddvmnqzdmsbjeqtdxiydvgxwlnuhqkzroidterrfyneexhgkxfwdkwkypqbamshudrwuqotobkqnpsnfzvpadf', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1223, 19, 44.49794404083338, 11.347589492797852, 'walk', DEFAULT, '2020-04-21 11:18:43.429856', 'tgsejsgjuarzlpprdbsessivflqhtwaiplcojzhbhppqicuzaasyprorvvgdedcppqziyghjvkcithuvdzmncehowvvdnehcatplzoxayhgjzaucntqokissqgwbzhcx', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1224, 19, 44.500239780729544, 11.349005699157713, 'walk', DEFAULT, '2020-04-21 11:19:39.833398', 'tgsejsgjuarzlpprdbsessivflqhtwaiplcojzhbhppqicuzaasyprorvvgdedcppqziyghjvkcithuvdzmncehowvvdnehcatplzoxayhgjzaucntqokissqgwbzhcx', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1225, 19, 44.50225995706609, 11.350464820861816, 'walk', DEFAULT, '2020-04-21 11:20:32.216523', 'tgsejsgjuarzlpprdbsessivflqhtwaiplcojzhbhppqicuzaasyprorvvgdedcppqziyghjvkcithuvdzmncehowvvdnehcatplzoxayhgjzaucntqokissqgwbzhcx', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1226, 20, 44.49647471986228, 11.356902122497559, 'walk', DEFAULT, '2020-04-21 11:21:14.327201', 'xvfeopexnwmlfktjyebjnyuxhraushhvvkmlttmkgadxvzmtmoezgfyiqaophnxfozcmdljaelppzgsvkbbktadbwvbkihapqlbqtmvakgcayezwegivspxgvmhurvgm', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1227, 20, 44.496229829434164, 11.355786323547362, 'walk', DEFAULT, '2020-04-21 11:22:30.963879', 'xvfeopexnwmlfktjyebjnyuxhraushhvvkmlttmkgadxvzmtmoezgfyiqaophnxfozcmdljaelppzgsvkbbktadbwvbkihapqlbqtmvakgcayezwegivspxgvmhurvgm', NULL, 2);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1228, 20, 44.496872664614436, 11.353597640991211, 'walk', DEFAULT, '2020-04-21 11:23:15.004386', 'xvfeopexnwmlfktjyebjnyuxhraushhvvkmlttmkgadxvzmtmoezgfyiqaophnxfozcmdljaelppzgsvkbbktadbwvbkihapqlbqtmvakgcayezwegivspxgvmhurvgm', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1229, 20, 44.498739907567064, 11.354327201843262, 'walk', DEFAULT, '2020-04-21 11:24:38.731079', 'xvfeopexnwmlfktjyebjnyuxhraushhvvkmlttmkgadxvzmtmoezgfyiqaophnxfozcmdljaelppzgsvkbbktadbwvbkihapqlbqtmvakgcayezwegivspxgvmhurvgm', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1230, 20, 44.50063769978638, 11.345958709716797, 'walk', DEFAULT, '2020-04-21 11:25:32.199152', 'xvfeopexnwmlfktjyebjnyuxhraushhvvkmlttmkgadxvzmtmoezgfyiqaophnxfozcmdljaelppzgsvkbbktadbwvbkihapqlbqtmvakgcayezwegivspxgvmhurvgm', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1231, 21, 44.50259664631667, 11.337804794311523, 'walk', DEFAULT, '2020-04-21 11:26:14.68691', 'uojascglmatswavgvfcwttbickjoobxtyvvplofwudbbhczzlpdibibwgcewxodjuuoznosluphlwtsxgzjnurbwnwgmbqudxdxkdnucrisssslcifosfsicvorwcdoo', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1232, 21, 44.50106622496427, 11.336817741394043, 'walk', DEFAULT, '2020-04-21 11:27:27.564156', 'uojascglmatswavgvfcwttbickjoobxtyvvplofwudbbhczzlpdibibwgcewxodjuuoznosluphlwtsxgzjnurbwnwgmbqudxdxkdnucrisssslcifosfsicvorwcdoo', NULL, 5);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1233, 21, 44.50069891786176, 11.33716106414795, 'walk', DEFAULT, '2020-04-21 11:28:23.272304', 'uojascglmatswavgvfcwttbickjoobxtyvvplofwudbbhczzlpdibibwgcewxodjuuoznosluphlwtsxgzjnurbwnwgmbqudxdxkdnucrisssslcifosfsicvorwcdoo', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1234, 21, 44.50014795286922, 11.337032318115234, 'walk', DEFAULT, '2020-04-21 11:29:00.822459', 'uojascglmatswavgvfcwttbickjoobxtyvvplofwudbbhczzlpdibibwgcewxodjuuoznosluphlwtsxgzjnurbwnwgmbqudxdxkdnucrisssslcifosfsicvorwcdoo', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1235, 21, 44.499750030469905, 11.337890625, 'walk', DEFAULT, '2020-04-21 11:29:22.902129', 'uojascglmatswavgvfcwttbickjoobxtyvvplofwudbbhczzlpdibibwgcewxodjuuoznosluphlwtsxgzjnurbwnwgmbqudxdxkdnucrisssslcifosfsicvorwcdoo', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1236, 21, 44.49858685711578, 11.338105201721191, 'walk', DEFAULT, '2020-04-21 11:30:10.729707', 'uojascglmatswavgvfcwttbickjoobxtyvvplofwudbbhczzlpdibibwgcewxodjuuoznosluphlwtsxgzjnurbwnwgmbqudxdxkdnucrisssslcifosfsicvorwcdoo', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1237, 21, 44.496444108614995, 11.337504386901855, 'walk', DEFAULT, '2020-04-21 11:30:46.076399', 'uojascglmatswavgvfcwttbickjoobxtyvvplofwudbbhczzlpdibibwgcewxodjuuoznosluphlwtsxgzjnurbwnwgmbqudxdxkdnucrisssslcifosfsicvorwcdoo', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1238, 21, 44.49405638181744, 11.336474418640137, 'walk', DEFAULT, '2020-04-21 11:31:44.726854', 'uojascglmatswavgvfcwttbickjoobxtyvvplofwudbbhczzlpdibibwgcewxodjuuoznosluphlwtsxgzjnurbwnwgmbqudxdxkdnucrisssslcifosfsicvorwcdoo', NULL, 4);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1239, 22, 44.497515492708025, 11.344413757324219, 'walk', DEFAULT, '2020-04-21 11:32:22.94469', 'vledcohmaaelzawcdrmegojzhbpkankbztqlkajzooyaxpcjfnssbckjawrsqmnwktlpcoplntvimwatpndnwslobajtfjwppstwkisbindnslfwmsigmxaejlwvcbow', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1240, 22, 44.49779098829304, 11.342010498046875, 'walk', DEFAULT, '2020-04-21 11:32:55.81152', 'vledcohmaaelzawcdrmegojzhbpkankbztqlkajzooyaxpcjfnssbckjawrsqmnwktlpcoplntvimwatpndnwslobajtfjwppstwkisbindnslfwmsigmxaejlwvcbow', NULL, 6);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1241, 22, 44.49993368729936, 11.342697143554688, 'walk', DEFAULT, '2020-04-21 11:33:44.604254', 'vledcohmaaelzawcdrmegojzhbpkankbztqlkajzooyaxpcjfnssbckjawrsqmnwktlpcoplntvimwatpndnwslobajtfjwppstwkisbindnslfwmsigmxaejlwvcbow', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1242, 22, 44.50051526344276, 11.342954635620117, 'walk', DEFAULT, '2020-04-21 11:34:29.870036', 'vledcohmaaelzawcdrmegojzhbpkankbztqlkajzooyaxpcjfnssbckjawrsqmnwktlpcoplntvimwatpndnwslobajtfjwppstwkisbindnslfwmsigmxaejlwvcbow', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1243, 22, 44.50140292110874, 11.3399076461792, 'walk', DEFAULT, '2020-04-21 11:34:52.91858', 'vledcohmaaelzawcdrmegojzhbpkankbztqlkajzooyaxpcjfnssbckjawrsqmnwktlpcoplntvimwatpndnwslobajtfjwppstwkisbindnslfwmsigmxaejlwvcbow', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1244, 22, 44.50299454928776, 11.340422630310059, 'walk', DEFAULT, '2020-04-21 11:35:13.30093', 'vledcohmaaelzawcdrmegojzhbpkankbztqlkajzooyaxpcjfnssbckjawrsqmnwktlpcoplntvimwatpndnwslobajtfjwppstwkisbindnslfwmsigmxaejlwvcbow', NULL, 8);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1245, 23, 44.49258696288604, 11.353812217712402, 'walk', DEFAULT, '2020-04-21 11:35:45.334251', 'rxpaojeplcrsjhferaqgxigjlbkporkrcuwnbqvhzrsawfhsonktjypxluovxckadyxpiapmhngmmcntikcpvserjfycactthiqjvhjemtehnmahcvfjbgunghbugodj', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1246, 23, 44.49304616027931, 11.352782249450684, 'walk', DEFAULT, '2020-04-21 11:36:10.050795', 'rxpaojeplcrsjhferaqgxigjlbkporkrcuwnbqvhzrsawfhsonktjypxluovxckadyxpiapmhngmmcntikcpvserjfycactthiqjvhjemtehnmahcvfjbgunghbugodj', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1247, 23, 44.49316861230689, 11.353211402893066, 'walk', DEFAULT, '2020-04-21 11:36:50.286861', 'rxpaojeplcrsjhferaqgxigjlbkporkrcuwnbqvhzrsawfhsonktjypxluovxckadyxpiapmhngmmcntikcpvserjfycactthiqjvhjemtehnmahcvfjbgunghbugodj', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1248, 23, 44.49393393165396, 11.35364055633545, 'walk', DEFAULT, '2020-04-21 11:37:29.874605', 'rxpaojeplcrsjhferaqgxigjlbkporkrcuwnbqvhzrsawfhsonktjypxluovxckadyxpiapmhngmmcntikcpvserjfycactthiqjvhjemtehnmahcvfjbgunghbugodj', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1249, 23, 44.49469924095751, 11.354026794433594, 'walk', DEFAULT, '2020-04-21 11:38:10.421136', 'rxpaojeplcrsjhferaqgxigjlbkporkrcuwnbqvhzrsawfhsonktjypxluovxckadyxpiapmhngmmcntikcpvserjfycactthiqjvhjemtehnmahcvfjbgunghbugodj', NULL, 2);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1250, 23, 44.49503597386932, 11.352438926696777, 'walk', DEFAULT, '2020-04-21 11:39:02.569044', 'rxpaojeplcrsjhferaqgxigjlbkporkrcuwnbqvhzrsawfhsonktjypxluovxckadyxpiapmhngmmcntikcpvserjfycactthiqjvhjemtehnmahcvfjbgunghbugodj', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1251, 23, 44.49485230161302, 11.351923942565916, 'walk', DEFAULT, '2020-04-21 11:40:14.578249', 'rxpaojeplcrsjhferaqgxigjlbkporkrcuwnbqvhzrsawfhsonktjypxluovxckadyxpiapmhngmmcntikcpvserjfycactthiqjvhjemtehnmahcvfjbgunghbugodj', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1252, 23, 44.49678083145113, 11.34960651397705, 'walk', DEFAULT, '2020-04-21 11:41:10.145999', 'rxpaojeplcrsjhferaqgxigjlbkporkrcuwnbqvhzrsawfhsonktjypxluovxckadyxpiapmhngmmcntikcpvserjfycactthiqjvhjemtehnmahcvfjbgunghbugodj', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1253, 23, 44.496321663465224, 11.34939193725586, 'walk', DEFAULT, '2020-04-21 11:42:05.566902', 'rxpaojeplcrsjhferaqgxigjlbkporkrcuwnbqvhzrsawfhsonktjypxluovxckadyxpiapmhngmmcntikcpvserjfycactthiqjvhjemtehnmahcvfjbgunghbugodj', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1254, 23, 44.497239995821396, 11.348104476928711, 'walk', DEFAULT, '2020-04-21 11:43:04.061851', 'rxpaojeplcrsjhferaqgxigjlbkporkrcuwnbqvhzrsawfhsonktjypxluovxckadyxpiapmhngmmcntikcpvserjfycactthiqjvhjemtehnmahcvfjbgunghbugodj', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1255, 23, 44.49727060665086, 11.34737491607666, 'walk', DEFAULT, '2020-04-21 11:43:43.191562', 'rxpaojeplcrsjhferaqgxigjlbkporkrcuwnbqvhzrsawfhsonktjypxluovxckadyxpiapmhngmmcntikcpvserjfycactthiqjvhjemtehnmahcvfjbgunghbugodj', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1256, 24, 44.48943370979737, 11.350507736206055, 'walk', DEFAULT, '2020-04-21 11:44:26.284952', 'ixvwvrkhrnqpmhuwbmjfjsfcffifnjwrknrdgzzcehsrymogsksubqpixrjwomixcxgnllhfpyrwssclwmvfbcwkwznrrfewvgaycsomdtannmrttklatezrmlabujjy', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1257, 24, 44.493780868588026, 11.34638786315918, 'walk', DEFAULT, '2020-04-21 11:45:19.470001', 'ixvwvrkhrnqpmhuwbmjfjsfcffifnjwrknrdgzzcehsrymogsksubqpixrjwomixcxgnllhfpyrwssclwmvfbcwkwznrrfewvgaycsomdtannmrttklatezrmlabujjy', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1258, 24, 44.495740045492575, 11.34638786315918, 'walk', DEFAULT, '2020-04-21 11:45:48.8408', 'ixvwvrkhrnqpmhuwbmjfjsfcffifnjwrknrdgzzcehsrymogsksubqpixrjwomixcxgnllhfpyrwssclwmvfbcwkwznrrfewvgaycsomdtannmrttklatezrmlabujjy', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1259, 13, 44.499195, 11.327222, 'bike', DEFAULT, '2020-04-21 16:56:33.88712', 'ynxmmwotwukqynaesypcfbmhwkrhrrhmwuzusfxnizjtiywfiqbfwlwyjnzbrtodgipiostjckipwcopyljnepsuidwkqlxggygdqavlccopmlevbzxpumqlbjycatfc', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1260, 13, 44.497144, 11.327544, 'bike', DEFAULT, '2020-04-21 16:57:26.248817', 'ynxmmwotwukqynaesypcfbmhwkrhrrhmwuzusfxnizjtiywfiqbfwlwyjnzbrtodgipiostjckipwcopyljnepsuidwkqlxggygdqavlccopmlevbzxpumqlbjycatfc', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1261, 13, 44.49564, 11.32804, 'bike', DEFAULT, '2020-04-21 16:58:20.950879', 'ynxmmwotwukqynaesypcfbmhwkrhrrhmwuzusfxnizjtiywfiqbfwlwyjnzbrtodgipiostjckipwcopyljnepsuidwkqlxggygdqavlccopmlevbzxpumqlbjycatfc', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1262, 13, 44.49571, 11.32852, 'bike', DEFAULT, '2020-04-21 16:59:09.19536', 'ynxmmwotwukqynaesypcfbmhwkrhrrhmwuzusfxnizjtiywfiqbfwlwyjnzbrtodgipiostjckipwcopyljnepsuidwkqlxggygdqavlccopmlevbzxpumqlbjycatfc', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1263, 13, 44.4954, 11.32869, 'bike', DEFAULT, '2020-04-21 16:59:51.983674', 'ynxmmwotwukqynaesypcfbmhwkrhrrhmwuzusfxnizjtiywfiqbfwlwyjnzbrtodgipiostjckipwcopyljnepsuidwkqlxggygdqavlccopmlevbzxpumqlbjycatfc', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1264, 13, 44.49546, 11.33105, 'bike', DEFAULT, '2020-04-21 17:00:54.793152', 'ynxmmwotwukqynaesypcfbmhwkrhrrhmwuzusfxnizjtiywfiqbfwlwyjnzbrtodgipiostjckipwcopyljnepsuidwkqlxggygdqavlccopmlevbzxpumqlbjycatfc', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1265, 13, 44.4955, 11.33293, 'bike', DEFAULT, '2020-04-21 17:01:21.82737', 'ynxmmwotwukqynaesypcfbmhwkrhrrhmwuzusfxnizjtiywfiqbfwlwyjnzbrtodgipiostjckipwcopyljnepsuidwkqlxggygdqavlccopmlevbzxpumqlbjycatfc', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1266, 13, 44.49555, 11.33466, 'bike', DEFAULT, '2020-04-21 17:02:02.179332', 'ynxmmwotwukqynaesypcfbmhwkrhrrhmwuzusfxnizjtiywfiqbfwlwyjnzbrtodgipiostjckipwcopyljnepsuidwkqlxggygdqavlccopmlevbzxpumqlbjycatfc', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1267, 13, 44.49511, 11.33464, 'bike', DEFAULT, '2020-04-21 17:02:29.421875', 'ynxmmwotwukqynaesypcfbmhwkrhrrhmwuzusfxnizjtiywfiqbfwlwyjnzbrtodgipiostjckipwcopyljnepsuidwkqlxggygdqavlccopmlevbzxpumqlbjycatfc', true, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1268, 13, 44.49511, 11.33464, 'walk', DEFAULT, '2020-04-21 17:02:29.423393', 'runalxxedkypuzxpkbsojsajslqeotvtzkpnpulzsieyufthxudqkcohaitsgvvizmtaqzqbexaewusglxctsnotroxkgtqkbxlxzsouaesvcqrlshysasiotlefalkz', NULL, 4);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1269, 13, 44.49486, 11.33457, 'walk', DEFAULT, '2020-04-21 17:03:09.180845', 'runalxxedkypuzxpkbsojsajslqeotvtzkpnpulzsieyufthxudqkcohaitsgvvizmtaqzqbexaewusglxctsnotroxkgtqkbxlxzsouaesvcqrlshysasiotlefalkz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1270, 13, 44.49474, 11.33511, 'walk', DEFAULT, '2020-04-21 17:03:48.808647', 'runalxxedkypuzxpkbsojsajslqeotvtzkpnpulzsieyufthxudqkcohaitsgvvizmtaqzqbexaewusglxctsnotroxkgtqkbxlxzsouaesvcqrlshysasiotlefalkz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1271, 13, 44.49499, 11.33521, 'walk', DEFAULT, '2020-04-21 17:04:30.920018', 'runalxxedkypuzxpkbsojsajslqeotvtzkpnpulzsieyufthxudqkcohaitsgvvizmtaqzqbexaewusglxctsnotroxkgtqkbxlxzsouaesvcqrlshysasiotlefalkz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1272, 13, 44.4951, 11.33585, 'walk', DEFAULT, '2020-04-21 17:05:17.946352', 'runalxxedkypuzxpkbsojsajslqeotvtzkpnpulzsieyufthxudqkcohaitsgvvizmtaqzqbexaewusglxctsnotroxkgtqkbxlxzsouaesvcqrlshysasiotlefalkz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1273, 13, 44.49502, 11.33663, 'walk', DEFAULT, '2020-04-21 17:05:59.630134', 'runalxxedkypuzxpkbsojsajslqeotvtzkpnpulzsieyufthxudqkcohaitsgvvizmtaqzqbexaewusglxctsnotroxkgtqkbxlxzsouaesvcqrlshysasiotlefalkz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1274, 13, 44.49465, 11.3365, 'walk', DEFAULT, '2020-04-21 17:06:27.594466', 'runalxxedkypuzxpkbsojsajslqeotvtzkpnpulzsieyufthxudqkcohaitsgvvizmtaqzqbexaewusglxctsnotroxkgtqkbxlxzsouaesvcqrlshysasiotlefalkz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1275, 13, 44.49404, 11.3362, 'walk', DEFAULT, '2020-04-21 17:07:03.655434', 'runalxxedkypuzxpkbsojsajslqeotvtzkpnpulzsieyufthxudqkcohaitsgvvizmtaqzqbexaewusglxctsnotroxkgtqkbxlxzsouaesvcqrlshysasiotlefalkz', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1276, 13, 44.49401, 11.33619, 'walk', DEFAULT, '2020-04-21 17:07:59.782514', 'runalxxedkypuzxpkbsojsajslqeotvtzkpnpulzsieyufthxudqkcohaitsgvvizmtaqzqbexaewusglxctsnotroxkgtqkbxlxzsouaesvcqrlshysasiotlefalkz', true, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1277, 13, 44.49401, 11.33619, 'car', DEFAULT, '2020-04-21 17:07:59.783845', 'xjhvqxtncxizvdcezfjchnrpelgntjoeqbqellqooqtzuzsfkqfjrgovmlmzcykaecswfujyiaszzaljjkczkcybucrskggpyzlsdmdzivbkcappstppanffxghkjftw', NULL, 3);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1278, 13, 44.49385, 11.33613, 'car', DEFAULT, '2020-04-21 17:08:41.556468', 'xjhvqxtncxizvdcezfjchnrpelgntjoeqbqellqooqtzuzsfkqfjrgovmlmzcykaecswfujyiaszzaljjkczkcybucrskggpyzlsdmdzivbkcappstppanffxghkjftw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1279, 13, 44.49321, 11.33585, 'car', DEFAULT, '2020-04-21 17:09:24.397493', 'xjhvqxtncxizvdcezfjchnrpelgntjoeqbqellqooqtzuzsfkqfjrgovmlmzcykaecswfujyiaszzaljjkczkcybucrskggpyzlsdmdzivbkcappstppanffxghkjftw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1280, 13, 44.49185, 11.33515, 'car', DEFAULT, '2020-04-21 17:10:17.512261', 'xjhvqxtncxizvdcezfjchnrpelgntjoeqbqellqooqtzuzsfkqfjrgovmlmzcykaecswfujyiaszzaljjkczkcybucrskggpyzlsdmdzivbkcappstppanffxghkjftw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1281, 13, 44.49, 11.33445, 'car', DEFAULT, '2020-04-21 17:11:12.452781', 'xjhvqxtncxizvdcezfjchnrpelgntjoeqbqellqooqtzuzsfkqfjrgovmlmzcykaecswfujyiaszzaljjkczkcybucrskggpyzlsdmdzivbkcappstppanffxghkjftw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1282, 13, 44.49028, 11.33114, 'car', DEFAULT, '2020-04-21 17:11:36.896426', 'xjhvqxtncxizvdcezfjchnrpelgntjoeqbqellqooqtzuzsfkqfjrgovmlmzcykaecswfujyiaszzaljjkczkcybucrskggpyzlsdmdzivbkcappstppanffxghkjftw', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1283, 13, 44.49036, 11.3308, 'car', DEFAULT, '2020-04-21 17:12:37.079554', 'xjhvqxtncxizvdcezfjchnrpelgntjoeqbqellqooqtzuzsfkqfjrgovmlmzcykaecswfujyiaszzaljjkczkcybucrskggpyzlsdmdzivbkcappstppanffxghkjftw', true, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1284, 13, 44.49036, 11.3308, 'walk', DEFAULT, '2020-04-21 17:12:37.084805', 'lkfausaktbqsfcuggtwzzuycaiorbacinmpuwmpeitpbpoedocklkphqkgvlralcycepkqhwujrwstgkywpaaoqxolxgjykxbzwrlfxefmkqnfuzjzlqslqpjtofynkb', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1285, 13, 44.49045, 11.33094, 'walk', DEFAULT, '2020-04-21 17:13:04.355914', 'lkfausaktbqsfcuggtwzzuycaiorbacinmpuwmpeitpbpoedocklkphqkgvlralcycepkqhwujrwstgkywpaaoqxolxgjykxbzwrlfxefmkqnfuzjzlqslqpjtofynkb', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1286, 14, 44.49541, 11.33959, 'walk', DEFAULT, '2020-04-21 17:31:02.199098', 'vfwwssdfltalmiagomzgssdabfnmxuisdxznfmifljmcwqucjmjlhtfyqewixiozykqpwbfnreoxutthuopejkjxfnnsdjaonjaectazfkrvjlpoofqjoqbzvrcujaex', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1287, 14, 44.4958, 11.33706, 'walk', DEFAULT, '2020-04-21 17:32:17.533939', 'vfwwssdfltalmiagomzgssdabfnmxuisdxznfmifljmcwqucjmjlhtfyqewixiozykqpwbfnreoxutthuopejkjxfnnsdjaonjaectazfkrvjlpoofqjoqbzvrcujaex', NULL, 4);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1288, 14, 44.49804, 11.33813, 'walk', DEFAULT, '2020-04-21 17:32:45.792702', 'vfwwssdfltalmiagomzgssdabfnmxuisdxznfmifljmcwqucjmjlhtfyqewixiozykqpwbfnreoxutthuopejkjxfnnsdjaonjaectazfkrvjlpoofqjoqbzvrcujaex', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1289, 14, 44.50006, 11.33905, 'walk', DEFAULT, '2020-04-21 17:33:41.41796', 'vfwwssdfltalmiagomzgssdabfnmxuisdxznfmifljmcwqucjmjlhtfyqewixiozykqpwbfnreoxutthuopejkjxfnnsdjaonjaectazfkrvjlpoofqjoqbzvrcujaex', NULL, 5);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1290, 14, 44.50203, 11.3399, 'walk', DEFAULT, '2020-04-21 17:34:56.591038', 'vfwwssdfltalmiagomzgssdabfnmxuisdxznfmifljmcwqucjmjlhtfyqewixiozykqpwbfnreoxutthuopejkjxfnnsdjaonjaectazfkrvjlpoofqjoqbzvrcujaex', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1291, 14, 44.50449, 11.34105, 'walk', DEFAULT, '2020-04-21 17:35:41.608903', 'vfwwssdfltalmiagomzgssdabfnmxuisdxznfmifljmcwqucjmjlhtfyqewixiozykqpwbfnreoxutthuopejkjxfnnsdjaonjaectazfkrvjlpoofqjoqbzvrcujaex', NULL, 8);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1292, 14, 44.50411, 11.34406, 'walk', DEFAULT, '2020-04-21 17:37:01.778837', 'vfwwssdfltalmiagomzgssdabfnmxuisdxznfmifljmcwqucjmjlhtfyqewixiozykqpwbfnreoxutthuopejkjxfnnsdjaonjaectazfkrvjlpoofqjoqbzvrcujaex', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1293, 14, 44.50409, 11.34526, 'walk', DEFAULT, '2020-04-21 17:37:40.805258', 'vfwwssdfltalmiagomzgssdabfnmxuisdxznfmifljmcwqucjmjlhtfyqewixiozykqpwbfnreoxutthuopejkjxfnnsdjaonjaectazfkrvjlpoofqjoqbzvrcujaex', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1294, 14, 44.50426, 11.34592, 'walk', DEFAULT, '2020-04-21 17:38:35.94688', 'vfwwssdfltalmiagomzgssdabfnmxuisdxznfmifljmcwqucjmjlhtfyqewixiozykqpwbfnreoxutthuopejkjxfnnsdjaonjaectazfkrvjlpoofqjoqbzvrcujaex', true, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1299, 14, 44.50436, 11.34583, 'car', DEFAULT, '2020-04-21 17:44:03.036319', 'rqljwgczjbcwfdgghmdgeatqormcdfrpxkimfbyvzpgorykcovpfhsvrvyejqbtesisdbxrgfjzrgtmrzlegoeabgqkbdtkkczuzzrpuertlgobehbniontpajebrpox', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1300, 14, 44.50452, 11.3461, 'car', DEFAULT, '2020-04-21 17:45:26.370672', 'rqljwgczjbcwfdgghmdgeatqormcdfrpxkimfbyvzpgorykcovpfhsvrvyejqbtesisdbxrgfjzrgtmrzlegoeabgqkbdtkkczuzzrpuertlgobehbniontpajebrpox', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1301, 14, 44.50409, 11.348, 'car', DEFAULT, '2020-04-21 17:46:01.38111', 'rqljwgczjbcwfdgghmdgeatqormcdfrpxkimfbyvzpgorykcovpfhsvrvyejqbtesisdbxrgfjzrgtmrzlegoeabgqkbdtkkczuzzrpuertlgobehbniontpajebrpox', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1302, 14, 44.50358, 11.34935, 'car', DEFAULT, '2020-04-21 17:46:28.395126', 'rqljwgczjbcwfdgghmdgeatqormcdfrpxkimfbyvzpgorykcovpfhsvrvyejqbtesisdbxrgfjzrgtmrzlegoeabgqkbdtkkczuzzrpuertlgobehbniontpajebrpox', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1303, 14, 44.50211, 11.35266, 'car', DEFAULT, '2020-04-21 17:47:33.099467', 'rqljwgczjbcwfdgghmdgeatqormcdfrpxkimfbyvzpgorykcovpfhsvrvyejqbtesisdbxrgfjzrgtmrzlegoeabgqkbdtkkczuzzrpuertlgobehbniontpajebrpox', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1304, 14, 44.50092, 11.35613, 'car', DEFAULT, '2020-04-21 17:48:14.323568', 'rqljwgczjbcwfdgghmdgeatqormcdfrpxkimfbyvzpgorykcovpfhsvrvyejqbtesisdbxrgfjzrgtmrzlegoeabgqkbdtkkczuzzrpuertlgobehbniontpajebrpox', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1305, 14, 44.49845, 11.35661, 'car', DEFAULT, '2020-04-21 17:49:08.951649', 'rqljwgczjbcwfdgghmdgeatqormcdfrpxkimfbyvzpgorykcovpfhsvrvyejqbtesisdbxrgfjzrgtmrzlegoeabgqkbdtkkczuzzrpuertlgobehbniontpajebrpox', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1306, 14, 44.49755, 11.35656, 'car', DEFAULT, '2020-04-21 17:50:02.121554', 'rqljwgczjbcwfdgghmdgeatqormcdfrpxkimfbyvzpgorykcovpfhsvrvyejqbtesisdbxrgfjzrgtmrzlegoeabgqkbdtkkczuzzrpuertlgobehbniontpajebrpox', NULL, 4);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1307, 14, 44.49649, 11.35667, 'bike', DEFAULT, '2020-04-21 17:54:06.875857', 'ljfluwycynpgllwopkulfubggfziouadtgvyiulsqtpyjoymbqvkcmemyiidmxekfzrnlvvjcibsdvhjsgdupqjpqloesvmniqhppnnwafwgvezdnxwoopvfvssnbbgv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1308, 14, 44.4948, 11.35685, 'bike', DEFAULT, '2020-04-21 17:54:48.330002', 'ljfluwycynpgllwopkulfubggfziouadtgvyiulsqtpyjoymbqvkcmemyiidmxekfzrnlvvjcibsdvhjsgdupqjpqloesvmniqhppnnwafwgvezdnxwoopvfvssnbbgv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1309, 14, 44.49519, 11.35531, 'bike', DEFAULT, '2020-04-21 17:55:39.13013', 'ljfluwycynpgllwopkulfubggfziouadtgvyiulsqtpyjoymbqvkcmemyiidmxekfzrnlvvjcibsdvhjsgdupqjpqloesvmniqhppnnwafwgvezdnxwoopvfvssnbbgv', NULL, 2);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1310, 14, 44.49402, 11.35492, 'bike', DEFAULT, '2020-04-21 17:56:16.103549', 'ljfluwycynpgllwopkulfubggfziouadtgvyiulsqtpyjoymbqvkcmemyiidmxekfzrnlvvjcibsdvhjsgdupqjpqloesvmniqhppnnwafwgvezdnxwoopvfvssnbbgv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1311, 14, 44.49405, 11.35443, 'bike', DEFAULT, '2020-04-21 17:56:42.178669', 'ljfluwycynpgllwopkulfubggfziouadtgvyiulsqtpyjoymbqvkcmemyiidmxekfzrnlvvjcibsdvhjsgdupqjpqloesvmniqhppnnwafwgvezdnxwoopvfvssnbbgv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1312, 14, 44.49253, 11.35376, 'bike', DEFAULT, '2020-04-21 17:57:13.375285', 'ljfluwycynpgllwopkulfubggfziouadtgvyiulsqtpyjoymbqvkcmemyiidmxekfzrnlvvjcibsdvhjsgdupqjpqloesvmniqhppnnwafwgvezdnxwoopvfvssnbbgv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1313, 14, 44.49298, 11.35278, 'bike', DEFAULT, '2020-04-21 17:57:28.270901', 'ljfluwycynpgllwopkulfubggfziouadtgvyiulsqtpyjoymbqvkcmemyiidmxekfzrnlvvjcibsdvhjsgdupqjpqloesvmniqhppnnwafwgvezdnxwoopvfvssnbbgv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1314, 14, 44.49207, 11.35204, 'bike', DEFAULT, '2020-04-21 17:58:49.338521', 'ljfluwycynpgllwopkulfubggfziouadtgvyiulsqtpyjoymbqvkcmemyiidmxekfzrnlvvjcibsdvhjsgdupqjpqloesvmniqhppnnwafwgvezdnxwoopvfvssnbbgv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1315, 14, 44.49292, 11.34979, 'bike', DEFAULT, '2020-04-21 17:59:42.890138', 'ljfluwycynpgllwopkulfubggfziouadtgvyiulsqtpyjoymbqvkcmemyiidmxekfzrnlvvjcibsdvhjsgdupqjpqloesvmniqhppnnwafwgvezdnxwoopvfvssnbbgv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1316, 14, 44.49371, 11.34775, 'bike', DEFAULT, '2020-04-21 18:00:12.273003', 'ljfluwycynpgllwopkulfubggfziouadtgvyiulsqtpyjoymbqvkcmemyiidmxekfzrnlvvjcibsdvhjsgdupqjpqloesvmniqhppnnwafwgvezdnxwoopvfvssnbbgv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1317, 14, 44.49423, 11.34646, 'bike', DEFAULT, '2020-04-21 18:00:37.783735', 'ljfluwycynpgllwopkulfubggfziouadtgvyiulsqtpyjoymbqvkcmemyiidmxekfzrnlvvjcibsdvhjsgdupqjpqloesvmniqhppnnwafwgvezdnxwoopvfvssnbbgv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1318, 14, 44.49461, 11.34408, 'bike', DEFAULT, '2020-04-21 18:01:28.765028', 'ljfluwycynpgllwopkulfubggfziouadtgvyiulsqtpyjoymbqvkcmemyiidmxekfzrnlvvjcibsdvhjsgdupqjpqloesvmniqhppnnwafwgvezdnxwoopvfvssnbbgv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1319, 14, 44.49539, 11.33971, 'bike', DEFAULT, '2020-04-21 18:02:03.97701', 'ljfluwycynpgllwopkulfubggfziouadtgvyiulsqtpyjoymbqvkcmemyiidmxekfzrnlvvjcibsdvhjsgdupqjpqloesvmniqhppnnwafwgvezdnxwoopvfvssnbbgv', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1320, 15, 44.48473, 11.35413, 'walk', DEFAULT, '2020-04-21 18:08:06.599052', 'twwroqwvcxsnwdusbdhxhbeecebuadqjdvjwfhwtdbkcmcddhwboxwbxsyiuozkrprsnmmhovgbwaougdgfwpsgagkohclygmrpqfgwuovllfnqydhhwoprsywvblurh', NULL, 10);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1321, 15, 44.48513, 11.35416, 'walk', DEFAULT, '2020-04-21 18:08:25.273601', 'twwroqwvcxsnwdusbdhxhbeecebuadqjdvjwfhwtdbkcmcddhwboxwbxsyiuozkrprsnmmhovgbwaougdgfwpsgagkohclygmrpqfgwuovllfnqydhhwoprsywvblurh', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1322, 15, 44.48577, 11.35249, 'walk', DEFAULT, '2020-04-21 18:09:15.650226', 'twwroqwvcxsnwdusbdhxhbeecebuadqjdvjwfhwtdbkcmcddhwboxwbxsyiuozkrprsnmmhovgbwaougdgfwpsgagkohclygmrpqfgwuovllfnqydhhwoprsywvblurh', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1323, 15, 44.4864, 11.35059, 'walk', DEFAULT, '2020-04-21 18:10:18.208463', 'twwroqwvcxsnwdusbdhxhbeecebuadqjdvjwfhwtdbkcmcddhwboxwbxsyiuozkrprsnmmhovgbwaougdgfwpsgagkohclygmrpqfgwuovllfnqydhhwoprsywvblurh', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1324, 15, 44.48705, 11.34823, 'walk', DEFAULT, '2020-04-21 18:11:08.589342', 'twwroqwvcxsnwdusbdhxhbeecebuadqjdvjwfhwtdbkcmcddhwboxwbxsyiuozkrprsnmmhovgbwaougdgfwpsgagkohclygmrpqfgwuovllfnqydhhwoprsywvblurh', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1325, 15, 44.48852, 11.34771, 'walk', DEFAULT, '2020-04-21 18:11:42.339579', 'twwroqwvcxsnwdusbdhxhbeecebuadqjdvjwfhwtdbkcmcddhwboxwbxsyiuozkrprsnmmhovgbwaougdgfwpsgagkohclygmrpqfgwuovllfnqydhhwoprsywvblurh', NULL, 3);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1326, 15, 44.49033, 11.34663, 'walk', DEFAULT, '2020-04-21 18:12:17.064947', 'twwroqwvcxsnwdusbdhxhbeecebuadqjdvjwfhwtdbkcmcddhwboxwbxsyiuozkrprsnmmhovgbwaougdgfwpsgagkohclygmrpqfgwuovllfnqydhhwoprsywvblurh', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1327, 15, 44.49068, 11.34414, 'walk', DEFAULT, '2020-04-21 18:13:35.656701', 'twwroqwvcxsnwdusbdhxhbeecebuadqjdvjwfhwtdbkcmcddhwboxwbxsyiuozkrprsnmmhovgbwaougdgfwpsgagkohclygmrpqfgwuovllfnqydhhwoprsywvblurh', true, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1328, 15, 44.49068, 11.34414, 'bike', DEFAULT, '2020-04-21 18:13:35.661715', 'vlobqlljxcbvpybfuacxqtapznivjcbzlgiglkcncwvcgnnmemkvovexpexoktoflpdlblijtzvcxjyoykvmowzdcmuyzroicrsopgchwweekeuefgjultvcgaylydvu', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1329, 15, 44.49139, 11.34414, 'bike', DEFAULT, '2020-04-21 18:14:03.555194', 'vlobqlljxcbvpybfuacxqtapznivjcbzlgiglkcncwvcgnnmemkvovexpexoktoflpdlblijtzvcxjyoykvmowzdcmuyzroicrsopgchwweekeuefgjultvcgaylydvu', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1330, 15, 44.49132, 11.34174, 'bike', DEFAULT, '2020-04-21 18:15:19.922567', 'vlobqlljxcbvpybfuacxqtapznivjcbzlgiglkcncwvcgnnmemkvovexpexoktoflpdlblijtzvcxjyoykvmowzdcmuyzroicrsopgchwweekeuefgjultvcgaylydvu', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1331, 15, 44.49221, 11.34187, 'bike', DEFAULT, '2020-04-21 18:16:11.76219', 'vlobqlljxcbvpybfuacxqtapznivjcbzlgiglkcncwvcgnnmemkvovexpexoktoflpdlblijtzvcxjyoykvmowzdcmuyzroicrsopgchwweekeuefgjultvcgaylydvu', NULL, 9);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1332, 15, 44.49308, 11.34213, 'bike', DEFAULT, '2020-04-21 18:17:48.635812', 'vlobqlljxcbvpybfuacxqtapznivjcbzlgiglkcncwvcgnnmemkvovexpexoktoflpdlblijtzvcxjyoykvmowzdcmuyzroicrsopgchwweekeuefgjultvcgaylydvu', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1333, 15, 44.4939, 11.34242, 'bike', DEFAULT, '2020-04-21 18:18:22.730899', 'vlobqlljxcbvpybfuacxqtapznivjcbzlgiglkcncwvcgnnmemkvovexpexoktoflpdlblijtzvcxjyoykvmowzdcmuyzroicrsopgchwweekeuefgjultvcgaylydvu', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1334, 15, 44.49403, 11.34111, 'bike', DEFAULT, '2020-04-21 18:19:12.425519', 'vlobqlljxcbvpybfuacxqtapznivjcbzlgiglkcncwvcgnnmemkvovexpexoktoflpdlblijtzvcxjyoykvmowzdcmuyzroicrsopgchwweekeuefgjultvcgaylydvu', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1335, 15, 44.49413, 11.34054, 'bike', DEFAULT, '2020-04-21 18:20:02.834279', 'vlobqlljxcbvpybfuacxqtapznivjcbzlgiglkcncwvcgnnmemkvovexpexoktoflpdlblijtzvcxjyoykvmowzdcmuyzroicrsopgchwweekeuefgjultvcgaylydvu', true, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1336, 15, 44.49413, 11.34054, 'car', DEFAULT, '2020-04-21 18:20:02.838955', 'jwcryhqwavsofoxynqzfvgwkofnjqgasfnhcrnuirlrrdoaalaaftnhoyyxbjwpaapswpgarroeiwqiwapwsrvftzzqwcilmvtfglypjvwbdbyojidenwgthuucwwksr', NULL, 7);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1337, 15, 44.49513, 11.34103, 'car', DEFAULT, '2020-04-21 18:20:29.716524', 'jwcryhqwavsofoxynqzfvgwkofnjqgasfnhcrnuirlrrdoaalaaftnhoyyxbjwpaapswpgarroeiwqiwapwsrvftzzqwcilmvtfglypjvwbdbyojidenwgthuucwwksr', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1338, 15, 44.49489, 11.3426, 'car', DEFAULT, '2020-04-21 18:22:02.214245', 'jwcryhqwavsofoxynqzfvgwkofnjqgasfnhcrnuirlrrdoaalaaftnhoyyxbjwpaapswpgarroeiwqiwapwsrvftzzqwcilmvtfglypjvwbdbyojidenwgthuucwwksr', NULL, 7);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1339, 15, 44.49633, 11.34298, 'car', DEFAULT, '2020-04-21 18:22:32.734931', 'jwcryhqwavsofoxynqzfvgwkofnjqgasfnhcrnuirlrrdoaalaaftnhoyyxbjwpaapswpgarroeiwqiwapwsrvftzzqwcilmvtfglypjvwbdbyojidenwgthuucwwksr', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1340, 15, 44.49759, 11.34336, 'car', DEFAULT, '2020-04-21 18:23:01.700452', 'jwcryhqwavsofoxynqzfvgwkofnjqgasfnhcrnuirlrrdoaalaaftnhoyyxbjwpaapswpgarroeiwqiwapwsrvftzzqwcilmvtfglypjvwbdbyojidenwgthuucwwksr', NULL, 2);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1341, 15, 44.49907, 11.34381, 'car', DEFAULT, '2020-04-21 18:23:36.909672', 'jwcryhqwavsofoxynqzfvgwkofnjqgasfnhcrnuirlrrdoaalaaftnhoyyxbjwpaapswpgarroeiwqiwapwsrvftzzqwcilmvtfglypjvwbdbyojidenwgthuucwwksr', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1342, 15, 44.5012, 11.34439, 'car', DEFAULT, '2020-04-21 18:24:41.120513', 'jwcryhqwavsofoxynqzfvgwkofnjqgasfnhcrnuirlrrdoaalaaftnhoyyxbjwpaapswpgarroeiwqiwapwsrvftzzqwcilmvtfglypjvwbdbyojidenwgthuucwwksr', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1343, 15, 44.50373, 11.34519, 'car', DEFAULT, '2020-04-21 18:25:17.725676', 'jwcryhqwavsofoxynqzfvgwkofnjqgasfnhcrnuirlrrdoaalaaftnhoyyxbjwpaapswpgarroeiwqiwapwsrvftzzqwcilmvtfglypjvwbdbyojidenwgthuucwwksr', NULL, 1);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1344, 15, 44.50468, 11.34552, 'car', DEFAULT, '2020-04-21 18:25:52.545205', 'jwcryhqwavsofoxynqzfvgwkofnjqgasfnhcrnuirlrrdoaalaaftnhoyyxbjwpaapswpgarroeiwqiwapwsrvftzzqwcilmvtfglypjvwbdbyojidenwgthuucwwksr', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1345, 15, 44.50453, 11.34618, 'car', DEFAULT, '2020-04-21 18:26:42.418876', 'jwcryhqwavsofoxynqzfvgwkofnjqgasfnhcrnuirlrrdoaalaaftnhoyyxbjwpaapswpgarroeiwqiwapwsrvftzzqwcilmvtfglypjvwbdbyojidenwgthuucwwksr', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1346, 15, 44.50423, 11.34566, 'car', DEFAULT, '2020-04-21 18:27:28.432466', 'jwcryhqwavsofoxynqzfvgwkofnjqgasfnhcrnuirlrrdoaalaaftnhoyyxbjwpaapswpgarroeiwqiwapwsrvftzzqwcilmvtfglypjvwbdbyojidenwgthuucwwksr', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1347, 16, 44.50028, 11.33621, 'walk', DEFAULT, '2020-04-21 18:28:51.366582', 'bxxshmryvovxwoqoyhuigfmokaqahbuvynfvetswlcjxhdupwsxfavibdopshzhvjurzzfhwijtgsvbtkvrkltqshijcasdunajlyhxqogrsqfbqhghqytwgpfvumcza', NULL, 5);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1348, 16, 44.50029, 11.33295, 'walk', DEFAULT, '2020-04-21 18:29:47.765622', 'bxxshmryvovxwoqoyhuigfmokaqahbuvynfvetswlcjxhdupwsxfavibdopshzhvjurzzfhwijtgsvbtkvrkltqshijcasdunajlyhxqogrsqfbqhghqytwgpfvumcza', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1349, 16, 44.49865, 11.33271, 'walk', DEFAULT, '2020-04-21 18:31:10.789576', 'bxxshmryvovxwoqoyhuigfmokaqahbuvynfvetswlcjxhdupwsxfavibdopshzhvjurzzfhwijtgsvbtkvrkltqshijcasdunajlyhxqogrsqfbqhghqytwgpfvumcza', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1350, 16, 44.49788, 11.33105, 'walk', DEFAULT, '2020-04-21 18:34:29.139633', 'bxxshmryvovxwoqoyhuigfmokaqahbuvynfvetswlcjxhdupwsxfavibdopshzhvjurzzfhwijtgsvbtkvrkltqshijcasdunajlyhxqogrsqfbqhghqytwgpfvumcza', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1351, 16, 44.49748, 11.32924, 'walk', DEFAULT, '2020-04-21 18:35:18.28136', 'bxxshmryvovxwoqoyhuigfmokaqahbuvynfvetswlcjxhdupwsxfavibdopshzhvjurzzfhwijtgsvbtkvrkltqshijcasdunajlyhxqogrsqfbqhghqytwgpfvumcza', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1352, 16, 44.49717, 11.32759, 'walk', DEFAULT, '2020-04-21 18:36:31.768079', 'bxxshmryvovxwoqoyhuigfmokaqahbuvynfvetswlcjxhdupwsxfavibdopshzhvjurzzfhwijtgsvbtkvrkltqshijcasdunajlyhxqogrsqfbqhghqytwgpfvumcza', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1353, 16, 44.49827, 11.32712, 'walk', DEFAULT, '2020-04-21 18:36:56.842881', 'bxxshmryvovxwoqoyhuigfmokaqahbuvynfvetswlcjxhdupwsxfavibdopshzhvjurzzfhwijtgsvbtkvrkltqshijcasdunajlyhxqogrsqfbqhghqytwgpfvumcza', true, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1354, 16, 44.49827, 11.32712, 'car', DEFAULT, '2020-04-21 18:36:56.848084', 'wbyhszfnarvkmmvfjpktfbgormkzkuzlrcimsfwyguhakfagnpkxxcdwjthwtlcoaptwqkjrnsvapillluvloerzybyrkjjogmkaedutlhgpcyeayclnurtkwwiojndu', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1355, 16, 44.49381, 11.32869, 'car', DEFAULT, '2020-04-21 18:38:49.759165', 'wbyhszfnarvkmmvfjpktfbgormkzkuzlrcimsfwyguhakfagnpkxxcdwjthwtlcoaptwqkjrnsvapillluvloerzybyrkjjogmkaedutlhgpcyeayclnurtkwwiojndu', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1356, 16, 44.49197, 11.32925, 'car', DEFAULT, '2020-04-21 18:40:05.802547', 'wbyhszfnarvkmmvfjpktfbgormkzkuzlrcimsfwyguhakfagnpkxxcdwjthwtlcoaptwqkjrnsvapillluvloerzybyrkjjogmkaedutlhgpcyeayclnurtkwwiojndu', NULL, 9);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1357, 16, 44.49018, 11.32963, 'car', DEFAULT, '2020-04-21 18:40:59.432594', 'wbyhszfnarvkmmvfjpktfbgormkzkuzlrcimsfwyguhakfagnpkxxcdwjthwtlcoaptwqkjrnsvapillluvloerzybyrkjjogmkaedutlhgpcyeayclnurtkwwiojndu', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1358, 16, 44.48827, 11.33467, 'car', DEFAULT, '2020-04-21 18:41:28.168659', 'wbyhszfnarvkmmvfjpktfbgormkzkuzlrcimsfwyguhakfagnpkxxcdwjthwtlcoaptwqkjrnsvapillluvloerzybyrkjjogmkaedutlhgpcyeayclnurtkwwiojndu', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1359, 16, 44.48644, 11.3396, 'car', DEFAULT, '2020-04-21 18:42:16.936365', 'wbyhszfnarvkmmvfjpktfbgormkzkuzlrcimsfwyguhakfagnpkxxcdwjthwtlcoaptwqkjrnsvapillluvloerzybyrkjjogmkaedutlhgpcyeayclnurtkwwiojndu', NULL, 6);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1360, 16, 44.48747, 11.33964, 'car', DEFAULT, '2020-04-21 18:43:01.441346', 'wbyhszfnarvkmmvfjpktfbgormkzkuzlrcimsfwyguhakfagnpkxxcdwjthwtlcoaptwqkjrnsvapillluvloerzybyrkjjogmkaedutlhgpcyeayclnurtkwwiojndu', true, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1361, 16, 44.48747, 11.33964, 'walk', DEFAULT, '2020-04-21 18:43:01.446211', 'wgigykpblsqazxavgtwzqaajxwaygleptwsyarylhyprszhcaxhtzoqzazevxwmnglnkcbtwfqrfbwmeqlyadmpkkaokrppqrvxcgnobmpqqdfbdezyzpxmwfoxtvzxg', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1362, 16, 44.48851, 11.33992, 'walk', DEFAULT, '2020-04-21 18:43:41.809367', 'wgigykpblsqazxavgtwzqaajxwaygleptwsyarylhyprszhcaxhtzoqzazevxwmnglnkcbtwfqrfbwmeqlyadmpkkaokrppqrvxcgnobmpqqdfbdezyzpxmwfoxtvzxg', NULL, 9);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1363, 16, 44.48943, 11.34071, 'walk', DEFAULT, '2020-04-21 18:44:31.154343', 'wgigykpblsqazxavgtwzqaajxwaygleptwsyarylhyprszhcaxhtzoqzazevxwmnglnkcbtwfqrfbwmeqlyadmpkkaokrppqrvxcgnobmpqqdfbdezyzpxmwfoxtvzxg', true, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1364, 16, 44.48943, 11.34071, 'bike', DEFAULT, '2020-04-21 18:44:31.159494', 'zuchjerynrnpvxgjvshoypvkgnhqwfrvsieaovipobmdxogogwggsaotgxbahakvocajnomijtgodquhlvgygkumajywmpiohhnsfknynimjewsvaonemdaaibjxlixj', NULL, 4);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1365, 16, 44.48997, 11.34107, 'bike', DEFAULT, '2020-04-21 18:45:07.51144', 'zuchjerynrnpvxgjvshoypvkgnhqwfrvsieaovipobmdxogogwggsaotgxbahakvocajnomijtgodquhlvgygkumajywmpiohhnsfknynimjewsvaonemdaaibjxlixj', NULL, NULL);
INSERT INTO public."position" (id, user_id, latitude, longitude, activity, geom, date_time, session_id, auto_generated, id_geofence_triggered) VALUES (1366, 16, 44.48979, 11.34341, 'bike', DEFAULT, '2020-04-21 18:45:57.219327', 'zuchjerynrnpvxgjvshoypvkgnhqwfrvsieaovipobmdxogogwggsaotgxbahakvocajnomijtgodquhlvgygkumajywmpiohhnsfknynimjewsvaonemdaaibjxlixj', NULL, NULL);


--
-- TOC entry 3678 (class 0 OID 22171)
-- Dependencies: 204
-- Data for Name: spatial_ref_sys; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3866 (class 0 OID 23405)
-- Dependencies: 216
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."user" (user_id, registration_token) VALUES (13, 'f0VgKSkHc0sPkjZh7ao0gk:APA91bFYsPvcZ4MK1wKlVVGlm0PZjfjY-agrVCWaQqQxxI2sVGME8iEx4BcGxI276zTHfy3fAyp8ZYKMm4nr6LfX1PL8br51Yf_TwpLDQ5nDv3QljvbDHZm1YVNoRtIzwWZ8IXgoYka1');
INSERT INTO public."user" (user_id, registration_token) VALUES (14, 'f0VgKSkHc0sPkjZh7ao0gk:APA91bFYsPvcZ4MK1wKlVVGlm0PZjfjY-agrVCWaQqQxxI2sVGME8iEx4BcGxI276zTHfy3fAyp8ZYKMm4nr6LfX1PL8br51Yf_TwpLDQ5nDv3QljvbDHZm1YVNoRtIzwWZ8IXgoYka2');
INSERT INTO public."user" (user_id, registration_token) VALUES (15, 'f0VgKSkHc0sPkjZh7ao0gk:APA91bFYsPvcZ4MK1wKlVVGlm0PZjfjY-agrVCWaQqQxxI2sVGME8iEx4BcGxI276zTHfy3fAyp8ZYKMm4nr6LfX1PL8br51Yf_TwpLDQ5nDv3QljvbDHZm1YVNoRtIzwWZ8IXgoYka3');
INSERT INTO public."user" (user_id, registration_token) VALUES (16, 'f0VgKSkHc0sPkjZh7ao0gk:APA91bFYsPvcZ4MK1wKlVVGlm0PZjfjY-agrVCWaQqQxxI2sVGME8iEx4BcGxI276zTHfy3fAyp8ZYKMm4nr6LfX1PL8br51Yf_TwpLDQ5nDv3QljvbDHZm1YVNoRtIzwWZ8IXgoYka4');
INSERT INTO public."user" (user_id, registration_token) VALUES (17, 'f0VgKSkHc0sPkjZh7ao0gk:APA91bFYsPvcZ4MK1wKlVVGlm0PZjfjY-agrVCWaQqQxxI2sVGME8iEx4BcGxI276zTHfy3fAyp8ZYKMm4nr6LfX1PL8br51Yf_TwpLDQ5nDv3QljvbDHZm1YVNoRtIzwWZ8IXgoYka5');
INSERT INTO public."user" (user_id, registration_token) VALUES (18, 'f0VgKSkHc0sPkjZh7ao0gk:APA91bFYsPvcZ4MK1wKlVVGlm0PZjfjY-agrVCWaQqQxxI2sVGME8iEx4BcGxI276zTHfy3fAyp8ZYKMm4nr6LfX1PL8br51Yf_TwpLDQ5nDv3QljvbDHZm1YVNoRtIzwWZ8IXgoYka6');
INSERT INTO public."user" (user_id, registration_token) VALUES (19, 'f0VgKSkHc0sPkjZh7ao0gk:APA91bFYsPvcZ4MK1wKlVVGlm0PZjfjY-agrVCWaQqQxxI2sVGME8iEx4BcGxI276zTHfy3fAyp8ZYKMm4nr6LfX1PL8br51Yf_TwpLDQ5nDv3QljvbDHZm1YVNoRtIzwWZ8IXgoYka7');
INSERT INTO public."user" (user_id, registration_token) VALUES (20, 'f0VgKSkHc0sPkjZh7ao0gk:APA91bFYsPvcZ4MK1wKlVVGlm0PZjfjY-agrVCWaQqQxxI2sVGME8iEx4BcGxI276zTHfy3fAyp8ZYKMm4nr6LfX1PL8br51Yf_TwpLDQ5nDv3QljvbDHZm1YVNoRtIzwWZ8IXgoYka8');
INSERT INTO public."user" (user_id, registration_token) VALUES (21, 'f0VgKSkHc0sPkjZh7ao0gk:APA91bFYsPvcZ4MK1wKlVVGlm0PZjfjY-agrVCWaQqQxxI2sVGME8iEx4BcGxI276zTHfy3fAyp8ZYKMm4nr6LfX1PL8br51Yf_TwpLDQ5nDv3QljvbDHZm1YVNoRtIzwWZ8IXgoYka9');
INSERT INTO public."user" (user_id, registration_token) VALUES (22, 'f0VgKSkHc0sPkjZh7ao0gk:APA91bFYsPvcZ4MK1wKlVVGlm0PZjfjY-agrVCWaQqQxxI2sVGME8iEx4BcGxI276zTHfy3fAyp8ZYKMm4nr6LfX1PL8br51Yf_TwpLDQ5nDv3QljvbDHZm1YVNoRtIzwWZ8IXgoYk10');
INSERT INTO public."user" (user_id, registration_token) VALUES (23, 'f0VgKSkHc0sPkjZh7ao0gk:APA91bFYsPvcZ4MK1wKlVVGlm0PZjfjY-agrVCWaQqQxxI2sVGME8iEx4BcGxI276zTHfy3fAyp8ZYKMm4nr6LfX1PL8br51Yf_TwpLDQ5nDv3QljvbDHZm1YVNoRtIzwWZ8IXgoYk11');
INSERT INTO public."user" (user_id, registration_token) VALUES (24, 'f0VgKSkHc0sPkjZh7ao0gk:APA91bFYsPvcZ4MK1wKlVVGlm0PZjfjY-agrVCWaQqQxxI2sVGME8iEx4BcGxI276zTHfy3fAyp8ZYKMm4nr6LfX1PL8br51Yf_TwpLDQ5nDv3QljvbDHZm1YVNoRtIzwWZ8IXgoYk12');
INSERT INTO public."user" (user_id, registration_token) VALUES (25, 'f0VgKSkHc0sPkjZh7ao0gk:APA91bFYsPvcZ4MK1wKlVVGlm0PZjfjY-agrVCWaQqQxxI2sVGME8iEx4BcGxI276zTHfy3fAyp8ZYKMm4nr6LfX1PL8br51Yf_TwpLDQ5nDv3QljvbDHZm1YVNoRtIzwWZ8IXgoYk13');


--
-- TOC entry 3878 (class 0 OID 0)
-- Dependencies: 213
-- Name: position_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.position_id_seq', 1366, true);


--
-- TOC entry 3879 (class 0 OID 0)
-- Dependencies: 215
-- Name: user_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_user_id_seq', 25, true);


--
-- TOC entry 3687 (class 2606 OID 23332)
-- Name: geofence_bike geofence_bike_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.geofence_bike
    ADD CONSTRAINT geofence_bike_pkey PRIMARY KEY (gid);


--
-- TOC entry 3695 (class 2606 OID 23336)
-- Name: geofence_walk geofence_walk_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.geofence_walk
    ADD CONSTRAINT geofence_walk_pkey PRIMARY KEY (gid);


--
-- TOC entry 3689 (class 2606 OID 23314)
-- Name: path_bike path_bike_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.path_bike
    ADD CONSTRAINT path_bike_pkey PRIMARY KEY (gid);


--
-- TOC entry 3693 (class 2606 OID 23322)
-- Name: path_car path_car_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.path_car
    ADD CONSTRAINT path_car_pkey PRIMARY KEY (gid);


--
-- TOC entry 3691 (class 2606 OID 23330)
-- Name: path_walk path_walk_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.path_walk
    ADD CONSTRAINT path_walk_pkey PRIMARY KEY (gid);


--
-- TOC entry 3697 (class 2606 OID 23338)
-- Name: position position_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."position"
    ADD CONSTRAINT position_pkey PRIMARY KEY (id);


--
-- TOC entry 3699 (class 2606 OID 23410)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (user_id);


--
-- TOC entry 3700 (class 2606 OID 23411)
-- Name: position position_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."position"
    ADD CONSTRAINT position_fk FOREIGN KEY (user_id) REFERENCES public."user"(user_id) NOT VALID;


-- Completed on 2020-04-21 19:00:43

--
-- PostgreSQL database dump complete
--

