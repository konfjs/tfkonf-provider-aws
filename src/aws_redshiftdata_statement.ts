import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftdataStatementArgsParameters {
  name: string;
  value: string;
}

export interface AwsRedshiftdataStatementArgsTimeouts {
  create?: string;
}

export interface AwsRedshiftdataStatementArgs {
  cluster_identifier?: string;
  database: string;
  db_user?: string;
  secret_arn?: string;
  sql: string;
  statement_name?: string;
  with_event?: boolean;
  workgroup_name?: string;
  parameters?: AwsRedshiftdataStatementArgsParameters[];
  timeouts?: AwsRedshiftdataStatementArgsTimeouts;
}

export class aws_redshiftdata_statement extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRedshiftdataStatementArgs) {
    const meta = {parameters:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_redshiftdata_statement", resourceName);
  }

  get database(): string {
    return `${this.resourceType}.${this.resourceName}.database`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get sql(): string {
    return `${this.resourceType}.${this.resourceName}.sql`;
  }
}
