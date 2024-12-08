import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsoadminApplicationProvidersArgsApplicationProvidersDisplayData {
}

export interface DataAwsSsoadminApplicationProvidersArgsApplicationProviders {
  display_data?: DataAwsSsoadminApplicationProvidersArgsApplicationProvidersDisplayData[];
}

export interface DataAwsSsoadminApplicationProvidersArgs {
  application_providers?: DataAwsSsoadminApplicationProvidersArgsApplicationProviders[];
}

export class data_aws_ssoadmin_application_providers extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSsoadminApplicationProvidersArgs) {
    const meta = {application_providers:{isBlock:true,display_data:{isBlock:true}}};
    super(terraformConfig, "data", args, meta, "aws_ssoadmin_application_providers", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
