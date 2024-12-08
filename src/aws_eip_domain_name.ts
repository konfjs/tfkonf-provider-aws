import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEipDomainNameArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEipDomainNameArgs {
  allocation_id: string;
  domain_name: string;
  timeouts?: AwsEipDomainNameArgsTimeouts;
}

export class aws_eip_domain_name extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEipDomainNameArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_eip_domain_name", resourceName);
  }

  get allocation_id(): string {
    return `${this.resourceType}.${this.resourceName}.allocation_id`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ptr_record(): string {
    return `${this.resourceType}.${this.resourceName}.ptr_record`;
  }
}
