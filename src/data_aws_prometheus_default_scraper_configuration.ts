import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsPrometheusDefaultScraperConfigurationArgs {
}

export class data_aws_prometheus_default_scraper_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsPrometheusDefaultScraperConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_prometheus_default_scraper_configuration", resourceName);
  }

  get configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.configuration`;
  }
}
