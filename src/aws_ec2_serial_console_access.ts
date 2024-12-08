import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2SerialConsoleAccessArgs {
  enabled?: boolean;
}

export class aws_ec2_serial_console_access extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2SerialConsoleAccessArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_serial_console_access", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
