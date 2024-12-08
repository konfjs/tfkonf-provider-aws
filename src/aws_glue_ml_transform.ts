import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueMlTransformArgsInputRecordTables {
  catalog_id?: string;
  connection_name?: string;
  database_name: string;
  table_name: string;
}

export interface AwsGlueMlTransformArgsParametersFindMatchesParameters {
  accuracy_cost_trade_off?: number;
  enforce_provided_labels?: boolean;
  precision_recall_trade_off?: number;
  primary_key_column_name?: string;
}

export interface AwsGlueMlTransformArgsParameters {
  transform_type: string;
  find_matches_parameters: AwsGlueMlTransformArgsParametersFindMatchesParameters;
}

export interface AwsGlueMlTransformArgs {
  description?: string;
  max_retries?: number;
  name: string;
  number_of_workers?: number;
  role_arn: string;
  tags?: { [key: string]: string };
  timeout?: number;
  worker_type?: string;
  input_record_tables: AwsGlueMlTransformArgsInputRecordTables[];
  parameters: AwsGlueMlTransformArgsParameters;
}

export class aws_glue_ml_transform extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGlueMlTransformArgs) {
    const meta = {input_record_tables:{isBlock:true},parameters:{isBlock:true,find_matches_parameters:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_glue_ml_transform", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get glue_version(): string {
    return `${this.resourceType}.${this.resourceName}.glue_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get label_count(): string {
    return `${this.resourceType}.${this.resourceName}.label_count`;
  }

  get max_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.max_capacity`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get schema(): string {
    return `${this.resourceType}.${this.resourceName}.schema`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
