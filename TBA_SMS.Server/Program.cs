using Microsoft.EntityFrameworkCore;
using TBA_SMS.core;
using TBA_SMS.core.Interface;
using TBA_SMS.core.Services;
using TBA_SMS.Core.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddControllers();
// Enable CORS

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(builder.Configuration.GetSection("AllowedOrigins")
            .Get<string[]>() ?? [""]).AllowAnyHeader().AllowAnyMethod();
    });
});


var provider = builder.Services.BuildServiceProvider();
var config = provider.GetRequiredService<IConfiguration>();
builder.Services.AddDbContext<TbaDbContext>(item => item.UseSqlServer(config.GetConnectionString("DbTBA")));

builder.Services.AddTransient<TbaDbContext>();
builder.Services.AddScoped<IStudentService, StudentService>();
builder.Services.AddScoped<IClassService, ClassService>();

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
app.UseCors();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
