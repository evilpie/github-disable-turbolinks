# GitHub Disable Turbolinks

This Firefox extension sets `data-turbo="false"` on the page body on `https://github.com/` once Firefox reaches `document_idle`. The content script runs in the page's main JavaScript world. It watches the body's `data-turbo` attribute and reapplies the setting after Turbo renders. Links and forms that inherit this setting use regular browser navigation. [Turbo attribute reference](https://turbo.hotwired.dev/reference/attributes)

Ported from [GitHub Disable Turbolinks by vimcaw Zhu](https://greasyfork.org/en/scripts/460001-github-disable-turbolinks/code).
