import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPrometheusScraperArgsDestinationAmp {
  workspace_arn: string;
}

export interface AwsPrometheusScraperArgsDestination {
  amp?: AwsPrometheusScraperArgsDestinationAmp[];
}

export interface AwsPrometheusScraperArgsSourceEks {
  cluster_arn: string;
  subnet_ids: string[];
}

export interface AwsPrometheusScraperArgsSource {
  eks?: AwsPrometheusScraperArgsSourceEks[];
}

export interface AwsPrometheusScraperArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsPrometheusScraperArgs {
  alias?: string;
  scrape_configuration: string;
  tags?: { [key: string]: string };
  destination?: AwsPrometheusScraperArgsDestination[];
  source?: AwsPrometheusScraperArgsSource[];
  timeouts?: AwsPrometheusScraperArgsTimeouts;
}

export class aws_prometheus_scraper extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsPrometheusScraperArgs) {
    const meta = {destination:{isBlock:true,amp:{isBlock:true}},source:{isBlock:true,eks:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_prometheus_scraper", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get scrape_configuration(): string {
    return `${this.resourceType}.${this.resourceName}.scrape_configuration`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
