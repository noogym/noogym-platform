ALTER TABLE "GymPlan"
ALTER COLUMN "features" TYPE JSONB
USING COALESCE(to_jsonb("features"), '[]'::jsonb);

ALTER TABLE "GymPlan"
ALTER COLUMN "features" SET NOT NULL;

ALTER TABLE "ArticleSection"
ALTER COLUMN "paragraphs" TYPE JSONB
USING COALESCE(to_jsonb("paragraphs"), '[]'::jsonb);

ALTER TABLE "ArticleSection"
ALTER COLUMN "paragraphs" SET NOT NULL;
