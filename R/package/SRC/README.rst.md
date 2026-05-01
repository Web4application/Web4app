
# Portal link

A portal link is a temporary endpoint to initiate an Admin Portal session. It expires five minutes after issuance.

```url title="Example Portal Link URL"
https://setup.workos.com?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Generate a Portal Link

Generate a Portal Link scoped to an Organization.

#### Request

```bash
curl --request POST \
  --url "https://api.workos.com/portal/generate_link" \
  --header "Authorization: Bearer sk_example_123456789" \
  --header "Content-Type: application/json" \
  -d @- <<'BODY'
    {
        "organization": "org_01EHZNVPK3SFK441A1RGBFSHRT",
        "intent": "sso"
    }
BODY
```

```js
import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS('sk_example_123456789');

const { link } = await workos.portal.generateLink({
  organization: 'org_01EHZNVPK3SFK441A1RGBFSHRT',
  intent: 'sso',
});
```

```rb
require "workos"

WorkOS.configure do |config|
  config.key = "sk_example_123456789"
end

link = WorkOS::Portal.generate_link(
  organization: "org_01EHZNVPK3SFK441A1RGBFSHRT",
  intent: "sso"
)
```

```py
from workos import WorkOSClient

workos_client = WorkOSClient(
    api_key="sk_example_123456789", client_id="client_123456789"
)

link = workos_client.portal.generate_link(
    organization_id="org_01EHZNVPK3SFK441A1RGBFSHRT", intent="sso"
)
```

```go
package main

import (
	"context"

	"github.com/workos/workos-go/v3/pkg/portal"
)

func main() {
	portal.SetAPIKey("sk_example_123456789")

	link, err := portal.GenerateLink(
		context.Background(),
		portal.GenerateLinkOpts{
			Organization: "org_01EHZNVPK3SFK441A1RGBFSHRT",
			Intent:       portal.SSO,
		},
	)

}
```

```php
<?php

WorkOS\WorkOS::setApiKey("sk_example_123456789");

$portal = new WorkOS\Portal();
$link = $portal->generateLink(
    organization: "org_01EHZNVPK3SFK441A1RGBFSHRT",
    intent: "sso"
);
```

```java
import com.workos.WorkOS;
import com.workos.portal.PortalApi.GeneratePortalLinkOptions;
import com.workos.portal.models.Intent;
import com.workos.portal.models.Link;

WorkOS workos = new WorkOS("sk_example_123456789");

String organizationId = "org_01EHZNVPK3SFK441A1RGBFSHRT";
GeneratePortalLinkOptions options = GeneratePortalLinkOptions.builder()
                                        .organization(organizationId)
                                        .intent(Intent.Sso)
                                        .build();

Link response = workos.portal.generateLink(options);
String link = response.link;
```

```cs
WorkOS.SetApiKey("sk_example_123456789");

var portalService = new PortalService();

var options = new GenerateLinkOptions {
    Intent = Intent.SSO,
    Organization = "org_01EHZNVPK3SFK441A1RGBFSHRT",
};

var link = await portalService.GenerateLink(options);
```

#### Response

```json
{
  "link": "https://setup.workos.com?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### /portal/generate_link

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `return_url` | string | No | The URL to go to when an admin clicks on your logo in the Admin Portal. If not specified, the return URL configured on the [Redirects](https://dashboard.workos.com/redirects) page will be used. |
| `success_url` | string | No | The URL to redirect the admin to when they finish setup. If not specified, the success URL configured on the [Redirects](https://dashboard.workos.com/redirects) page will be used. |
| `organization` | string | Yes | An [Organization](/reference/organization) identifier. |
| `intent` | "sso" | "dsync" | "audit_logs" | ... | No | The intent of the Admin Portal. `sso` - Launch Admin Portal for creating SSO connections `dsync` - Launch Admin Portal for creating Directory Sync connections `audit_logs` - Launch Admin Portal for viewing Audit Logs `log_streams` - Launch Admin Portal for creating Log Streams `domain_verification` - Launch Admin Portal for Domain Verification `certificate_renewal` - Launch Admin Portal for renewing SAML Certificates `bring_your_own_key` - Launch Admin Portal for configuring Bring Your Own Key |
| `intent_options` | object | No | Options to configure the Admin Portal based on the intent. |
| `it_contact_emails` | string[] | No | The email addresses of the IT contacts to grant access to the Admin Portal for the given organization. Accepts up to 20 emails. |
