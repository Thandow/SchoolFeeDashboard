-- Compare fees marked paid vs actual payments

SELECT
  s.name AS school_name,
  COALESCE(SUM(CASE WHEN f.status = 'paid' THEN f.amount END), 0) AS total_fees_paid,
  COALESCE(SUM(p.amount), 0) AS total_payments_received
FROM schools s
LEFT JOIN learners l ON l.school_id = s.id
LEFT JOIN fees f ON f.learner_id = l.id
LEFT JOIN payments p ON p.learner_id = l.id
GROUP BY s.name
HAVING
  COALESCE(SUM(CASE WHEN f.status = 'paid' THEN f.amount END), 0)
  <>
  COALESCE(SUM(p.amount), 0);