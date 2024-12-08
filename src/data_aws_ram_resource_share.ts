import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRamResourceShareArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsRamResourceShareArgs {
  resource_owner: string;
  resource_share_status?: string;
  filter?: DataAwsRamResourceShareArgsFilter[];
}

export class data_aws_ram_resource_share extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRamResourceShareArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ram_resource_share", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get owning_account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owning_account_id`;
  }

  get resource_arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_arns`;
  }

  get resource_owner(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_owner`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
