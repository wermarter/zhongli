CREATE TABLE "Users" (
  "id" varchar(20),
  "psid" varchar(50) UNIQUE,
  "name" varchar(100) NOT NULL,
  "password" varchar(255) NOT NULL,
  "role" varchar(10) NOT NULL,
  "address" varchar(100),
  PRIMARY KEY ("id")
);

CREATE TABLE "Groups" (
  "id" uuid,
  "type" varchar(20) NOT NULL,
  "name" varchar(100) NOT NULl,
  PRIMARY KEY ("id")
);

CREATE TABLE "Memberships" (
  "user_id" varchar(20),
  "group_id" uuid NOT NULL,
  PRIMARY KEY ("user_id", "group_id"),
  CONSTRAINT "FK_Memberships.user_id"
    FOREIGN KEY ("user_id")
      REFERENCES "Users"("id") ON DELETE CASCADE,
  CONSTRAINT "FK_Memberships.group_id"
    FOREIGN KEY ("group_id")
      REFERENCES "Groups"("id") ON DELETE CASCADE
);

CREATE TABLE "Courses" (
  "group_id" uuid,
  "time_slot" integer NOT NULL,
  "lecturer_id" varchar(20),
  PRIMARY KEY ("group_id"),
  CONSTRAINT "FK_Courses.group_id"
    FOREIGN KEY ("group_id")
      REFERENCES "Groups"("id") ON DELETE CASCADE,
  CONSTRAINT "FK_Courses.lecturer_id"
    FOREIGN KEY ("lecturer_id")
      REFERENCES "Users"("id") ON DELETE SET NULL
);

CREATE TABLE "MentorGroups" (
  "group_id" uuid,
  "mentor_id" varchar(20),
  PRIMARY KEY ("group_id"),
  CONSTRAINT "FK_MentorGroups.mentor_id"
    FOREIGN KEY ("mentor_id")
      REFERENCES "Users"("id") ON DELETE SET NULL,
  CONSTRAINT "FK_MentorGroups.group_id"
    FOREIGN KEY ("group_id")
      REFERENCES "Groups"("id") ON DELETE CASCADE
);

CREATE TABLE "Faculties" (
  "group_id" uuid,
  "description" text,
  PRIMARY KEY ("group_id"),
  CONSTRAINT "FK_Faculties.group_id"
    FOREIGN KEY ("group_id")
      REFERENCES "Groups"("id") ON DELETE CASCADE
  -- CONSTRAINT "FK_Faculties.admin_id"
  --   FOREIGN KEY ("admin_id")
  --     REFERENCES "Users"("id") ON DELETE SET NULL
);

CREATE TABLE "GroupItems" (
  "id" uuid,
  "group_id" uuid,
  "created_at" timestamp NOT NULL,
  "author_id" varchar(20) NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "FK_GroupItems.group_id"
    FOREIGN KEY ("group_id")
      REFERENCES "Groups"("id") ON DELETE CASCADE,
  CONSTRAINT "FK_GroupItems.author_id"
    FOREIGN KEY ("author_id")
      REFERENCES "Users"("id") ON DELETE CASCADE
);

CREATE TABLE "Announcements" (
  "item_id" uuid,
  "content" text NOT NULL,
  PRIMARY KEY ("item_id")
);

CREATE TABLE "Reminders" (
  "item_id" uuid,
  "content" text NOT NULL,
  "due_date" timestamp NOT NULL,
  PRIMARY KEY ("item_id")
);

CREATE TABLE "Polls" (
  "item_id" uuid,
  "title" varchar(255) NOT NULL,
  "options" json NOT NULL,
  "is_closed" boolean DEFAULT false,
  PRIMARY KEY ("item_id")
);

CREATE TABLE "PollVotes" (
  "poll_id" uuid,
  "voter_id" varchar(20),
  "option_index" integer NOT NULL,
  PRIMARY KEY ("poll_id", "voter_id"),
  CONSTRAINT "FK_PollVotes.voter_id"
    FOREIGN KEY ("voter_id")
      REFERENCES "Users"("id") ON DELETE CASCADE
);

