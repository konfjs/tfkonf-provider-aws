import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGameliftAliasArgsRoutingStrategy {
  fleet_id?: string;
  message?: string;
  type: string;
}

export interface AwsGameliftAliasArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  routing_strategy: AwsGameliftAliasArgsRoutingStrategy;
}

export class aws_gamelift_alias extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGameliftAliasArgs) {
    const meta = {routing_strategy:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_gamelift_alias", resourceName);
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
