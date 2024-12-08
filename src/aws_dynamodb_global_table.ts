import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDynamodbGlobalTableArgsReplica {
  region_name: string;
}

export interface AwsDynamodbGlobalTableArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDynamodbGlobalTableArgs {
  name: string;
  replica: AwsDynamodbGlobalTableArgsReplica[];
  timeouts?: AwsDynamodbGlobalTableArgsTimeouts;
}

export class aws_dynamodb_global_table extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDynamodbGlobalTableArgs) {
    const meta = {replica:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dynamodb_global_table", resourceName);
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
}
