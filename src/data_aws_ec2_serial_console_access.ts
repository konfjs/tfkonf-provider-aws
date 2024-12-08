import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2SerialConsoleAccessArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2SerialConsoleAccessArgs {
  timeouts?: DataAwsEc2SerialConsoleAccessArgsTimeouts;
}

export class data_aws_ec2_serial_console_access extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2SerialConsoleAccessArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_serial_console_access", resourceName);
  }

  get enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.enabled`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
