import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatazoneDomainArgsSingleSignOn {
  user_assignment?: string;
}

export interface AwsDatazoneDomainArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsDatazoneDomainArgs {
  description?: string;
  domain_execution_role: string;
  kms_key_identifier?: string;
  name: string;
  skip_deletion_check?: boolean;
  tags?: { [key: string]: string };
  single_sign_on?: AwsDatazoneDomainArgsSingleSignOn[];
  timeouts?: AwsDatazoneDomainArgsTimeouts;
}

export class aws_datazone_domain extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDatazoneDomainArgs) {
    const meta = {single_sign_on:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_datazone_domain", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get domain_execution_role(): string {
    return `${this.resourceType}.${this.resourceName}.domain_execution_role`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get portal_url(): string {
    return `${this.resourceType}.${this.resourceName}.portal_url`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
