import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVerifiedaccessInstanceTrustProviderAttachmentArgs {
  verifiedaccess_instance_id: string;
  verifiedaccess_trust_provider_id: string;
}

export class aws_verifiedaccess_instance_trust_provider_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVerifiedaccessInstanceTrustProviderAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_verifiedaccess_instance_trust_provider_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get verifiedaccess_instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.verifiedaccess_instance_id`;
  }

  get verifiedaccess_trust_provider_id(): string {
    return `${this.resourceType}.${this.resourceName}.verifiedaccess_trust_provider_id`;
  }
}
