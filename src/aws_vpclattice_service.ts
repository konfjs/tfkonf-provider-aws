import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpclatticeServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpclatticeServiceArgs {
  certificate_arn?: string;
  custom_domain_name?: string;
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsVpclatticeServiceArgsTimeouts;
}

export class aws_vpclattice_service extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpclatticeServiceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpclattice_service", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get auth_type(): string {
    return `${this.resourceType}.${this.resourceName}.auth_type`;
  }

  get dns_entry(): string {
    return `${this.resourceType}.${this.resourceName}.dns_entry`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
