-- Active Gauteng schools ordered by newest
-- Approach: Filter active schools in Gauteng and sort by creation date descending.

SELECT
  name,
  created_at
FROM schools
WHERE is_active = TRUE
  AND province = 'Gauteng'
ORDER BY created_at DESC;
