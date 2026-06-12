-- Learners who have never made a payment

SELECT
  l.name,
  s.name AS school_name,
  l.grade
FROM learners l
JOIN schools s ON s.id = l.school_id
LEFT JOIN payments p ON p.learner_id = l.id
WHERE p.id IS NULL;