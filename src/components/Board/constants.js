import React from 'react';

import {
  CheckCircle,
  Cancel,
  Info,
  ArrowUpward,
  ArrowDownward,
} from 'rmdi';

const TYPES = [
  { label: 'Задача', value: 'Task', icon: () => <CheckCircle color="#00C781" /> },
  { label: 'Исправление', value: 'Bug', icon: () => <Cancel color="#FF4040" /> },
  { label: 'Улучшение', value: 'Improvement', icon: () => <Info color="#FFAA15" /> },
];

const PRIORITIES = [
  { label: 'Критический', value: 'Critical', icon: () => <ArrowUpward color="#FF4040" /> },
  { label: 'Высокий', value: 'High', icon: () => <ArrowUpward color="#FF4040" /> },
  { label: 'Средний', value: 'Medium', icon: () => <ArrowDownward color="#FFAA15" /> },
  { label: 'Низкий', value: 'Low', icon: () => <ArrowDownward color="#00C781" /> },
];

export { TYPES, PRIORITIES };
