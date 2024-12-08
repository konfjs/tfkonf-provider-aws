import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmAssociationArgsOutputLocation {
  s3_bucket_name: string;
  s3_key_prefix?: string;
  s3_region?: string;
}

export interface AwsSsmAssociationArgsTargets {
  key: string;
  values: string[];
}

export interface AwsSsmAssociationArgs {
  apply_only_at_cron_interval?: boolean;
  association_name?: string;
  automation_target_parameter_name?: string;
  compliance_severity?: string;
  instance_id?: string;
  max_concurrency?: string;
  max_errors?: string;
  name: string;
  schedule_expression?: string;
  sync_compliance?: string;
  tags?: { [key: string]: string };
  wait_for_success_timeout_seconds?: number;
  output_location?: AwsSsmAssociationArgsOutputLocation;
  targets?: AwsSsmAssociationArgsTargets[];
}

export class aws_ssm_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSsmAssociationArgs) {
    const meta = {output_location:{isBlock:true},targets:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ssm_association", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get association_id(): string {
    return `${this.resourceType}.${this.resourceName}.association_id`;
  }

  get document_version(): string {
    return `${this.resourceType}.${this.resourceName}.document_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parameters(): string {
    return `${this.resourceType}.${this.resourceName}.parameters`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
