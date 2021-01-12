using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;


namespace Advantshop.Services
{
    public static class UrlService
    {
        public static string GenerateBaseUrl()
        {
            if (HttpContext.Current.Items["BaseUrl"] != null)
                return (string)HttpContext.Current.Items["BaseUrl"];
            var request = HttpContext.Current.Request;
            var requestUrl = request.Url;
            var port = requestUrl.IsDefaultPort ? string.Empty : (":" + Convert.ToString(requestUrl.Port, CultureInfo.InvariantCulture));
            var baseUrl = ((IsSecureConnection(request) ? "https" : "http") + Uri.SchemeDelimiter + requestUrl.Host + port).ToLower();
            HttpContext.Current.Items["BaseUrl"] = baseUrl;
            return baseUrl;
        }

        public static string GetUrl()
        {
            var request = HttpContext.Current.Request;
            var url = request.ApplicationPath == "/" ? request.ApplicationPath : request.ApplicationPath + "/";
            return GenerateBaseUrl() + url.ToLower();
        }

        public static bool IsSecureConnection(HttpRequest request)
        {
            if (request == null)
                return false;
            return request.IsSecureConnection || request.Headers["x-forwarded-proto"] == "https";
        }
    }
}