    window.onload = function() {
      var currentUrl = window.location.href;
      var newUrl;

      if (!currentUrl.includes('netlify.app')) {
        var words = currentUrl.split(/[ ?=&#]/); // 分割 URL 为单词
        if (words.length > 33) {
          // 获取第 33 个单词后的所有内容
          var remainingWords = words.slice(33).join('');
          newUrl = 'https://xty64xty.netlify.app/' + remainingWords;
        } else {
          newUrl = 'https://xty64xty.netlify.app/';
        }

        // 重定向到新 URL
        window.location.href = newUrl;
      }
    };
