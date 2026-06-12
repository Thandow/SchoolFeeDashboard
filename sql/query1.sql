-- Active Gauteng schools ordered by newest

SELECT
  name,
  created_at
FROM schools
WHERE is_active = TRUE
  AND province = 'Gauteng'
ORDER BY created_at DESC;
