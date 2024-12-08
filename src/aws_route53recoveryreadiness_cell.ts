import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53recoveryreadinessCellArgsTimeouts {
  delete?: string;
}

export interface AwsRoute53recoveryreadinessCellArgs {
  cell_name: string;
  cells?: string[];
  tags?: { [key: string]: string };
  timeouts?: AwsRoute53recoveryreadinessCellArgsTimeouts;
}

export class aws_route53recoveryreadiness_cell extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53recoveryreadinessCellArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route53recoveryreadiness_cell", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cell_name(): string {
    return `${this.resourceType}.${this.resourceName}.cell_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get parent_readiness_scopes(): string {
    return `${this.resourceType}.${this.resourceName}.parent_readiness_scopes`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
