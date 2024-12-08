import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53recoveryreadinessRecoveryGroupArgsTimeouts {
  delete?: string;
}

export interface AwsRoute53recoveryreadinessRecoveryGroupArgs {
  cells?: string[];
  recovery_group_name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsRoute53recoveryreadinessRecoveryGroupArgsTimeouts;
}

export class aws_route53recoveryreadiness_recovery_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53recoveryreadinessRecoveryGroupArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route53recoveryreadiness_recovery_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get recovery_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.recovery_group_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
