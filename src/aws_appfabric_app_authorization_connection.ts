import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppfabricAppAuthorizationConnectionArgsAuthRequest {
  code: string;
  redirect_uri: string;
}

export interface AwsAppfabricAppAuthorizationConnectionArgsTimeouts {
  create?: string;
}

export interface AwsAppfabricAppAuthorizationConnectionArgs {
  app_authorization_arn: string;
  app_bundle_arn: string;
  auth_request?: AwsAppfabricAppAuthorizationConnectionArgsAuthRequest[];
  timeouts?: AwsAppfabricAppAuthorizationConnectionArgsTimeouts;
}

export class aws_appfabric_app_authorization_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppfabricAppAuthorizationConnectionArgs) {
    const meta = {auth_request:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_appfabric_app_authorization_connection", resourceName);
  }

  get app(): string {
    return `${this.resourceType}.${this.resourceName}.app`;
  }

  get app_authorization_arn(): string {
    return `${this.resourceType}.${this.resourceName}.app_authorization_arn`;
  }

  get app_bundle_arn(): string {
    return `${this.resourceType}.${this.resourceName}.app_bundle_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tenant(): string {
    return `${this.resourceType}.${this.resourceName}.tenant`;
  }
}
