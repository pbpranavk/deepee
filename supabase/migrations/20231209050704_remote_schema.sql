alter table "public"."Investment" drop constraint "Investment_investment_id_fkey";

alter table "public"."Investment" drop column "investment_id";

alter table "public"."Investment" add column "journey_id" bigint;

alter table "public"."Investment" add constraint "Investment_journey_id_fkey" FOREIGN KEY (journey_id) REFERENCES "Journey"(id) not valid;

alter table "public"."Investment" validate constraint "Investment_journey_id_fkey";


