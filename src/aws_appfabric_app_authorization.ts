import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppfabricAppAuthorizationArgsCredentialApiKeyCredential {
  api_key: string;
}

export interface AwsAppfabricAppAuthorizationArgsCredentialOauth2Credential {
  client_id: string;
  client_secret: string;
}

export interface AwsAppfabricAppAuthorizationArgsCredential {
  api_key_credential?: AwsAppfabricAppAuthorizationArgsCredentialApiKeyCredential[];
  oauth2_credential?: AwsAppfabricAppAuthorizationArgsCredentialOauth2Credential[];
}

export interface AwsAppfabricAppAuthorizationArgsTenant {
  tenant_display_name: string;
  tenant_identifier: string;
}

export interface AwsAppfabricAppAuthorizationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsAppfabricAppAuthorizationArgs {
  app: string;
  app_bundle_arn: string;
  auth_type: string;
  tags?: { [key: string]: string };
  credential?: AwsAppfabricAppAuthorizationArgsCredential[];
  tenant?: AwsAppfabricAppAuthorizationArgsTenant[];
  timeouts?: AwsAppfabricAppAuthorizationArgsTimeouts;
}

export class aws_appfabric_app_authorization extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppfabricAppAuthorizationArgs) {
    const meta = {credential:{isBlock:true,api_key_credential:{isBlock:true},oauth2_credential:{isBlock:true}},tenant:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_appfabric_app_authorization", resourceName);
  }

  get app(): string {
    return `${this.resourceType}.${this.resourceName}.app`;
  }

  get app_bundle_arn(): string {
    return `${this.resourceType}.${this.resourceName}.app_bundle_arn`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get auth_type(): string {
    return `${this.resourceType}.${this.resourceName}.auth_type`;
  }

  get auth_url(): string {
    return `${this.resourceType}.${this.resourceName}.auth_url`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get persona(): string {
    return `${this.resourceType}.${this.resourceName}.persona`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get updated_at(): string {
    return `${this.resourceType}.${this.resourceName}.updated_at`;
  }
}
