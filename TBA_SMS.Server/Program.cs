using Microsoft.EntityFrameworkCore;
using TBA_SMS.core;
using TBA_SMS.core.Interface;
using TBA_SMS.core.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddControllers();
// Enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var provider = builder.Services.BuildServiceProvider();
var config = provider.GetRequiredService<IConfiguration>();
builder.Services.AddDbContext<TbaDbContext>(item => item.UseSqlServer(config.GetConnectionString("DbTBA")));

builder.Services.AddTransient<TbaDbContext>();
builder.Services.AddScoped<IStudentService, StudentService>();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();

app.UseAuthorization();

// Enable CORS
app.UseCors("AllowAll");

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
