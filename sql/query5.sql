-- Users inactive for 30+ days or never logged in
-- Approach: Filter users whose last login is older than 30 days or is NULL.

SELECT
  u.email,
  s.name AS school_name,
  u.role,
  u.last_login
FROM users u
JOIN schools s ON s.id = u.school_id
WHERE
  u.last_login IS NULL
  OR u.last_login < (CURRENT_DATE - 30);