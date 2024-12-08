import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotProvisioningTemplateArgsPreProvisioningHook {
  payload_version?: string;
  target_arn: string;
}

export interface AwsIotProvisioningTemplateArgs {
  description?: string;
  enabled?: boolean;
  name: string;
  provisioning_role_arn: string;
  tags?: { [key: string]: string };
  template_body: string;
  pre_provisioning_hook?: AwsIotProvisioningTemplateArgsPreProvisioningHook;
}

export class aws_iot_provisioning_template extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIotProvisioningTemplateArgs) {
    const meta = {pre_provisioning_hook:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_iot_provisioning_template", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_version_id(): string {
    return `${this.resourceType}.${this.resourceName}.default_version_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get provisioning_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.provisioning_role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get template_body(): string {
    return `${this.resourceType}.${this.resourceName}.template_body`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
