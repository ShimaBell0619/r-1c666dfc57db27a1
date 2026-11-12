var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapGet("/health", () => Results.Ok(new { status = "ok" }));

app.MapGet("/api/info", (HttpContext context, IConfiguration config) =>
{
    context.Response.Headers.CacheControl = "no-store";
    // These sample values are intentionally public. Never return all configuration.
    return Results.Ok(new
    {
        demoMessage = config["DEMO_MESSAGE"] ?? "（未設定）",
        frontendMessage = config["FRONTEND_MESSAGE"] ?? "（未設定）"
    });
});

app.Run();
