import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsFsxOntapStorageVirtualMachinesArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsFsxOntapStorageVirtualMachinesArgs {
  filter?: DataAwsFsxOntapStorageVirtualMachinesArgsFilter[];
}

export class data_aws_fsx_ontap_storage_virtual_machines extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsFsxOntapStorageVirtualMachinesArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_fsx_ontap_storage_virtual_machines", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }
}
