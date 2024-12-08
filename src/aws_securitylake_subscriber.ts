import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecuritylakeSubscriberArgsSourceAwsLogSourceResource {
  source_name: string;
}

export interface AwsSecuritylakeSubscriberArgsSourceCustomLogSourceResource {
  source_name: string;
}

export interface AwsSecuritylakeSubscriberArgsSource {
  aws_log_source_resource?: AwsSecuritylakeSubscriberArgsSourceAwsLogSourceResource[];
  custom_log_source_resource?: AwsSecuritylakeSubscriberArgsSourceCustomLogSourceResource[];
}

export interface AwsSecuritylakeSubscriberArgsSubscriberIdentity {
  external_id: string;
  principal: string;
}

export interface AwsSecuritylakeSubscriberArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsSecuritylakeSubscriberArgs {
  subscriber_description?: string;
  subscriber_name?: string;
  tags?: { [key: string]: string };
  source?: AwsSecuritylakeSubscriberArgsSource[];
  subscriber_identity?: AwsSecuritylakeSubscriberArgsSubscriberIdentity[];
  timeouts?: AwsSecuritylakeSubscriberArgsTimeouts;
}

export class aws_securitylake_subscriber extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSecuritylakeSubscriberArgs) {
    const meta = {source:{isBlock:true,aws_log_source_resource:{isBlock:true},custom_log_source_resource:{isBlock:true}},subscriber_identity:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_securitylake_subscriber", resourceName);
  }

  get access_type(): string {
    return `${this.resourceType}.${this.resourceName}.access_type`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_share_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_share_arn`;
  }

  get resource_share_name(): string {
    return `${this.resourceType}.${this.resourceName}.resource_share_name`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get s3_bucket_arn(): string {
    return `${this.resourceType}.${this.resourceName}.s3_bucket_arn`;
  }

  get subscriber_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.subscriber_endpoint`;
  }

  get subscriber_status(): string {
    return `${this.resourceType}.${this.resourceName}.subscriber_status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
