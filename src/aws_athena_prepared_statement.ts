import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAthenaPreparedStatementArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsAthenaPreparedStatementArgs {
  description?: string;
  name: string;
  query_statement: string;
  workgroup: string;
  timeouts?: AwsAthenaPreparedStatementArgsTimeouts;
}

export class aws_athena_prepared_statement extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAthenaPreparedStatementArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_athena_prepared_statement", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get query_statement(): string {
    return `${this.resourceType}.${this.resourceName}.query_statement`;
  }

  get workgroup(): string {
    return `${this.resourceType}.${this.resourceName}.workgroup`;
  }
}
