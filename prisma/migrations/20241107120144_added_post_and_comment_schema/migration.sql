/*
  Warnings:

  - Added the required column `comment` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "comment" TEXT NOT NULL;

-- AlterTable
CREATE SEQUENCE post_comment_cout_seq;
ALTER TABLE "Post" ALTER COLUMN "comment_cout" SET DEFAULT nextval('post_comment_cout_seq');
ALTER SEQUENCE post_comment_cout_seq OWNED BY "Post"."comment_cout";
