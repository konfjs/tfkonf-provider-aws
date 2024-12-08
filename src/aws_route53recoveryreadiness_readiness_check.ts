import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53recoveryreadinessReadinessCheckArgsTimeouts {
  delete?: string;
}

export interface AwsRoute53recoveryreadinessReadinessCheckArgs {
  readiness_check_name: string;
  resource_set_name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsRoute53recoveryreadinessReadinessCheckArgsTimeouts;
}

export class aws_route53recoveryreadiness_readiness_check extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53recoveryreadinessReadinessCheckArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route53recoveryreadiness_readiness_check", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get readiness_check_name(): string {
    return `${this.resourceType}.${this.resourceName}.readiness_check_name`;
  }

  get resource_set_name(): string {
    return `${this.resourceType}.${this.resourceName}.resource_set_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
