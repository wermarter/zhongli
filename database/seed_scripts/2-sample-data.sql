INSERT INTO "Users" ("id", "name", "password", "role") VALUES
('studenta', 'Le Van A', '$2b$10$nR1vqytFgk0ieIWp5T.9b.SybF5QroDvG.mql2xnRUtuowytQ6z0G', 'STUDENT'),
('studentb', 'Ho Lee Shit', '$2b$10$nR1vqytFgk0ieIWp5T.9b.SybF5QroDvG.mql2xnRUtuowytQ6z0G', 'STUDENT'),
('lecturera', 'Kyoukai Kanata', '$2b$10$nR1vqytFgk0ieIWp5T.9b.SybF5QroDvG.mql2xnRUtuowytQ6z0G', 'LECTURER'),
('lecturerb', 'Sekai Saikou', '$2b$10$nR1vqytFgk0ieIWp5T.9b.SybF5QroDvG.mql2xnRUtuowytQ6z0G', 'LECTURER');

INSERT INTO "Groups" ("id", "type") VALUES
('9c270c7f-3c3e-45a0-8326-3e0390096191', 'COURSE'),
('9c270c7f-3c3e-45a0-8326-3e0390096192', 'COURSE'),
('9c270c7f-3c3e-45a0-8326-3e0390096193', 'FACULTY'),
('9c270c7f-3c3e-45a0-8326-3e0390096194', 'FACULTY'),
('9c270c7f-3c3e-45a0-8326-3e0390096195', 'MENTORGROUP'),
('9c270c7f-3c3e-45a0-8326-3e0390096196', 'MENTORGROUP');

INSERT INTO "Courses" ("group_id", "course_name", "time_slot", "lecturer_id") VALUES
('9c270c7f-3c3e-45a0-8326-3e0390096191', 'Intro to Computing', 1, 'lecturera'),
('9c270c7f-3c3e-45a0-8326-3e0390096192', 'Intro to C/C++', 2, 'lecturerb');

INSERT INTO "MentorGroups" ("group_id", "mentor_id", "mentor_name") VALUES
('9c270c7f-3c3e-45a0-8326-3e0390096195', 'lecturera', 'Kyoukai Kanata'),
('9c270c7f-3c3e-45a0-8326-3e0390096196', 'lecturerb', 'Sekai Saikou');

INSERT INTO "Faculties" ("group_id", "name") VALUES
('9c270c7f-3c3e-45a0-8326-3e0390096193', 'CSE'),
('9c270c7f-3c3e-45a0-8326-3e0390096194', 'BA');

INSERT INTO "Memberships" ("user_id", "group_id") VALUES
('lecturera', '9c270c7f-3c3e-45a0-8326-3e0390096193'),
('lecturerb', '9c270c7f-3c3e-45a0-8326-3e0390096194'),
('studenta', '9c270c7f-3c3e-45a0-8326-3e0390096193'),
('studentb', '9c270c7f-3c3e-45a0-8326-3e0390096193'),
('studenta', '9c270c7f-3c3e-45a0-8326-3e0390096195'),
('studentb', '9c270c7f-3c3e-45a0-8326-3e0390096195');
