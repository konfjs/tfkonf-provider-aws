import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQldbStreamArgsKinesisConfiguration {
  aggregation_enabled?: boolean;
  stream_arn: string;
}

export interface AwsQldbStreamArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsQldbStreamArgs {
  exclusive_end_time?: string;
  inclusive_start_time: string;
  ledger_name: string;
  role_arn: string;
  stream_name: string;
  tags?: { [key: string]: string };
  kinesis_configuration: AwsQldbStreamArgsKinesisConfiguration;
  timeouts?: AwsQldbStreamArgsTimeouts;
}

export class aws_qldb_stream extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsQldbStreamArgs) {
    const meta = {kinesis_configuration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_qldb_stream", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get inclusive_start_time(): string {
    return `${this.resourceType}.${this.resourceName}.inclusive_start_time`;
  }

  get ledger_name(): string {
    return `${this.resourceType}.${this.resourceName}.ledger_name`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get stream_name(): string {
    return `${this.resourceType}.${this.resourceName}.stream_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
