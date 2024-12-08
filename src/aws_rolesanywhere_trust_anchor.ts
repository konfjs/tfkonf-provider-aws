import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRolesanywhereTrustAnchorArgsNotificationSettings {
}

export interface AwsRolesanywhereTrustAnchorArgsSourceSourceData {
  acm_pca_arn?: string;
  x509_certificate_data?: string;
}

export interface AwsRolesanywhereTrustAnchorArgsSource {
  source_type: string;
  source_data: AwsRolesanywhereTrustAnchorArgsSourceSourceData;
}

export interface AwsRolesanywhereTrustAnchorArgs {
  name: string;
  tags?: { [key: string]: string };
  notification_settings?: AwsRolesanywhereTrustAnchorArgsNotificationSettings[];
  source: AwsRolesanywhereTrustAnchorArgsSource;
}

export class aws_rolesanywhere_trust_anchor extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRolesanywhereTrustAnchorArgs) {
    const meta = {notification_settings:{isBlock:true},source:{isBlock:true,source_data:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_rolesanywhere_trust_anchor", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get enabled(): string {
    return `${this.resourceType}.${this.resourceName}.enabled`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
