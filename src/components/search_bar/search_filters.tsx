import React, { Component, Fragment, ReactElement } from 'react';
import { createFilter, FilterConfig } from './filters';
import { Query } from './query';
import { EuiFilterGroup } from '../filter_group';

export type SearchFiltersFiltersType = FilterConfig[];

interface EuiSearchFiltersProps {
  query: Query;
  onChange: (query: Query) => void;
  filters: SearchFiltersFiltersType;
}

type DefaultProps = Pick<EuiSearchFiltersProps, 'filters'>;

export class EuiSearchFilters extends Component<EuiSearchFiltersProps> {
  static defaultProps: DefaultProps = {
    filters: [],
  };

  render() {
    const { filters = [], query, onChange } = this.props;

    const items: ReactElement[] = [];

    filters.forEach((filterConfig, index) => {
      if (filterConfig.available && !filterConfig.available()) {
        return;
      }
      const key = `filter_${index}`;
      const control = createFilter(index, filterConfig, query, onChange);
      items.push(<Fragment key={key}>{control}</Fragment>);
    });

    return <EuiFilterGroup>{items}</EuiFilterGroup>;
  }
}
