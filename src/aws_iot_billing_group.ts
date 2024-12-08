import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotBillingGroupArgsProperties {
  description?: string;
}

export interface AwsIotBillingGroupArgs {
  name: string;
  tags?: { [key: string]: string };
  properties?: AwsIotBillingGroupArgsProperties[];
}

export class aws_iot_billing_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIotBillingGroupArgs) {
    const meta = {properties:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_iot_billing_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get metadata(): string {
    return `${this.resourceType}.${this.resourceName}.metadata`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
