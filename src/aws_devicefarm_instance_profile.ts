import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDevicefarmInstanceProfileArgs {
  description?: string;
  exclude_app_packages_from_cleanup?: string[];
  name: string;
  package_cleanup?: boolean;
  reboot_after_use?: boolean;
  tags?: { [key: string]: string };
}

export class aws_devicefarm_instance_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDevicefarmInstanceProfileArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_devicefarm_instance_profile", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
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
