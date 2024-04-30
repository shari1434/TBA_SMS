using Microsoft.EntityFrameworkCore;
using TBA_SMS.core.Models;

namespace TBA_SMS.core
{
    public class TbaDbContext : DbContext
    {
        public TbaDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Classes> Class { get; set; }

        public DbSet<Course> StdCourse { get; set; }

        public DbSet<CourseDetail> StdCourseDetail { get; set; }

        public DbSet<Section> StdSection { get; set; }

        public DbSet<Sponsor> Sponsors { get; set; }

        public DbSet<Subject> StdSubject { get; set; }
        public DbSet<Student> Students { get; set; }

        public DbSet<StudentAttendance> StudentAttendance { get; set; }

        public DbSet<Teacher> Teachers { get; set; }

        public DbSet<UserRole> UsersRole { get; set; }

        public DbSet<Role> Role { get; set; }

        public DbSet<UserRegs> UserRegs { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Student>()
                .HasOne(s => s.Classes)
                .WithMany(c => c.Students)
                .HasForeignKey(s => s.ClassId)
                .OnDelete(DeleteBehavior.NoAction);



        }
    }

}
