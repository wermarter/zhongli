INSERT INTO "Users" ("id", "name", "password", "role") VALUES
('studenta', 'Le Van A', '$2b$10$nR1vqytFgk0ieIWp5T.9b.SybF5QroDvG.mql2xnRUtuowytQ6z0G', 'STUDENT'),
('studentb', 'Ho Lee Shit', '$2b$10$nR1vqytFgk0ieIWp5T.9b.SybF5QroDvG.mql2xnRUtuowytQ6z0G', 'STUDENT'),
('lecturera', 'Kyoukai Kanata', '$2b$10$nR1vqytFgk0ieIWp5T.9b.SybF5QroDvG.mql2xnRUtuowytQ6z0G', 'LECTURER'),
('lecturerb', 'Sekai Saikou', '$2b$10$nR1vqytFgk0ieIWp5T.9b.SybF5QroDvG.mql2xnRUtuowytQ6z0G', 'LECTURER');

INSERT INTO "Groups" ("id", "type", "name") VALUES
('9c270c7f-3c3e-45a0-8326-3e0390096191', 'COURSE', 'Intro to Computing'),
('9c270c7f-3c3e-45a0-8326-3e0390096192', 'COURSE', 'Intro to C/C++'),
('9c270c7f-3c3e-45a0-8326-3e0390096193', 'FACULTY', 'Computer science and Engineering (CSE)'),
('9c270c7f-3c3e-45a0-8326-3e0390096194', 'FACULTY', 'Business Administration (BA)'),
('9c270c7f-3c3e-45a0-8326-3e0390096195', 'MENTORGROUP', 'IT K18 - group 1'),
('9c270c7f-3c3e-45a0-8326-3e0390096196', 'MENTORGROUP', 'DS K18 - group 1');

INSERT INTO "Courses" ("group_id", "time_slot", "lecturer_id") VALUES
('9c270c7f-3c3e-45a0-8326-3e0390096191', 1, 'lecturera'),
('9c270c7f-3c3e-45a0-8326-3e0390096192', 2, 'lecturerb');

INSERT INTO "MentorGroups" ("group_id", "mentor_id") VALUES
('9c270c7f-3c3e-45a0-8326-3e0390096195', 'lecturera'),
('9c270c7f-3c3e-45a0-8326-3e0390096196', 'lecturerb');

INSERT INTO "Faculties" ("group_id", "description") VALUES
('9c270c7f-3c3e-45a0-8326-3e0390096193', 'some description'),
('9c270c7f-3c3e-45a0-8326-3e0390096194', 'some other description');

INSERT INTO "Memberships" ("user_id", "group_id") VALUES
('lecturera', '9c270c7f-3c3e-45a0-8326-3e0390096193'),
('lecturerb', '9c270c7f-3c3e-45a0-8326-3e0390096194'),
('studenta', '9c270c7f-3c3e-45a0-8326-3e0390096193'),
('studentb', '9c270c7f-3c3e-45a0-8326-3e0390096193'),
('studenta', '9c270c7f-3c3e-45a0-8326-3e0390096195'),
('studentb', '9c270c7f-3c3e-45a0-8326-3e0390096195'),
('studentb', '9c270c7f-3c3e-45a0-8326-3e0390096191'),
('studenta', '9c270c7f-3c3e-45a0-8326-3e0390096192');