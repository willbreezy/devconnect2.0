using backend.data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("DevConnectDatabase");

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddSingleton<DatabaseContext>();
// Ajout du DbConext avec SQLite
builder.Services.AddDbContext<DevConnectContext>(options => options.UseSqlite(
    "Data Source=devconnect.db; Pooling=True; Max Pool Size=100; Min Pool Size=5;"
));

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{   
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();