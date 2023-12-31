    window.onload = function() {
      var currentUrl = window.location.href;
      var baseUrl = 'https://xty64xty.netlify.app';

      if (!currentUrl.includes('netlify.app')) {
        var urlParts = new URL(currentUrl);
        var newPath = urlParts.pathname + urlParts.search + urlParts.hash;
        var newUrl = baseUrl + newPath;

        // 重定向到新 URL
        window.location.href = newUrl;
      }
    };
